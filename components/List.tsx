import { PostType, IPost } from "../interfaces/post";
import Link from "next/link";
type postProps = {
  post: PostType | IPost;
};

export default function List({ post }: postProps) {
  return (
    <div className="h-20 rounded-md cursor-pointer">
      <Link href={`/detail/${post?.slug}`}>
        <ul>
          <li className="w-full hover:font-semibold">{post?.title}</li>
          <li className="text-sm">{post?.date}</li>
        </ul>
      </Link>
    </div>
  );
}
