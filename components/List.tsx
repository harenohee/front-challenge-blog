import PostType from "../interfaces/post";
import Link from "next/link";
type postProps = {
  post: PostType;
};

export default function List({ post }: postProps) {
  return (
    <div key={post.slug} className="grid grid-cols-2 gap-8">
      <Link href={`/${post.slug}`}>
        <li className="hover:font-semibold cursor-pointer">{post.title}</li>
      </Link>
      <li className="text-sm">{post.date}</li>
    </div>
  );
}
