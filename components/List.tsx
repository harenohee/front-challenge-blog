import PostType from "../interfaces/post";
import Link from "next/link";
type postProps = {
  post: PostType;
};

export default function List({ post }: postProps) {
  return (
    <div
      key={post.slug}
      className="w-[80%] h-20 hover:bg-gradient-to-r from-lime-50 to-indigo-100 rounded-md cursor-pointer"
    >
      <Link href={`/${post.slug}`}>
        <ul>
          <li className="w-full hover:font-semibold">{post.title}</li>
          <li className="text-sm">{post.date}</li>
        </ul>
      </Link>
    </div>
  );
}
