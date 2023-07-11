import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import PostType from "../interfaces/post";
import Link from "next/link";

type Props = {
  allPosts: PostType[];
};
export default function Blog({ allPosts }: Props) {
  return (
    <ul>
      {allPosts.map((post) => (
        <div key={post.slug}>
          <Link as={`/${post.slug}`} href={`/${post.slug}`}>
            <li>{post.title}</li>
          </Link>
          <span>{post.date}</span>
        </div>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  // __post 폴더에서 파일 읽어옴
  const files = fs.readdirSync(join(process.cwd(), "__post"));
  const allPosts = files.map((file) => {
    const rawData = fs.readFileSync(join("__post", file), "utf-8");
    const { data } = matter(rawData);
    return data;
  });

  return {
    props: {
      allPosts,
    },
  };
}
