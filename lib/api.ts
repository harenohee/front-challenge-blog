import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postDirectory = join(process.cwd(), "__post");
// md파일 get하는 함수
export const getPostSlugs = () => {
  return fs.readdirSync(postDirectory);
};

// file get metadata
export const getMetadata = () => {
  const files = fs.readdirSync(join(process.cwd(), "__post"));
  const posts = files.map((file) => {
    const rawData = fs.readFileSync(join("__post", file), "utf-8");
    const { data } = matter(rawData);
    return data;
  });
  return posts;
};

export const getPostBySlugs = (slug: string) => {
  // .md 문자 제거
  const fileName = slug.replace(/\.md$/, "");
  const fullPath = join(postDirectory, `${fileName}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);
  return { data, content };
};

// 모든 포스트를 get하는 함수
export const getAllPosts = () => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((file) => getPostBySlugs(file).data)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
};

// 파라미터로 넘겨받은 태그에 맞는 post만 get하는 함수
export const getByTag = (tag: string) => {
  const slugs = getPostSlugs();
  const taggedPosts = slugs
    .map((file) => getPostBySlugs(file).data)
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return taggedPosts;
};
