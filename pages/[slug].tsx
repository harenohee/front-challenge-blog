import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import PostType from "../interfaces/post";
import { remark } from "remark";
import html from "remark-html";

type detailProps = {
  post: PostType;
  content: string;
};

export default function Detail({ post, content }: detailProps) {
  return (
    <div>
      <div className="flex justify-between">
        <h2>{post.title}</h2>
        <span>{post.date}</span>
      </div>
      <div className="w-full box-border p-4 border-red-200 border mt-4">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};
export async function getStaticProps({ params }: Params) {
  const post = fs.readFileSync(join("__post", `${params.slug}.md`), "utf-8");
  const { data, content } = matter(post);

  const processedContent = await remark().use(html).process(content);
  const contentToHTML = processedContent.toString();

  return {
    props: {
      post: data,
      content: contentToHTML,
    },
  };
}
export const getStaticPaths = async () => {
  const files = fs.readdirSync(join(process.cwd(), "__post"));

  const posts = files.map((file) => {
    const rawData = fs.readFileSync(join("__post", file), "utf-8");
    const { data } = matter(rawData);
    return data;
  });

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
