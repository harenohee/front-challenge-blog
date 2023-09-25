import { PostType } from "../interfaces/post";
import List from "../components/List";
import { getAllPosts } from "../lib/api";
import Tag from "../components/layout/Tag";

type Props = {
  allPosts: PostType[];
};
export default function Blog({ allPosts }: Props) {
  return (
    <div>
      <div className="flex justify-between">
        <Tag tag="Job" />
        <Tag tag="CSS" />
        <Tag tag="Career" />
        <Tag tag="React" />
      </div>
      <ul>
        {allPosts.map((post) => (
          <List post={post} key={post.slug} />
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
}
