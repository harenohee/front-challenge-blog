import PostType from "../interfaces/post";
import List from "../components/List";
import { getAllPosts } from "../lib/api";
type Props = {
  allPosts: PostType[];
};
export default function Blog({ allPosts }: Props) {
  return (
    <ul>
      {allPosts.map((post) => (
        <List post={post} key={post.slug} />
      ))}
    </ul>
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
