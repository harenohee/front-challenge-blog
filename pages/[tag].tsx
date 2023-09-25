import List from "../components/List";
import { getByTag, getMetadata, getPostBySlugs } from "../lib/api";

const TagList = ({ taggedPosts }: any) => {
  //   const [filteredPost, setFilteredPost] = useState<PostType[]>([]);
  //   const postFiltering = () => {
  //     // const filteredData = allPosts.filter((post) => post.tag == tagState);
  //     const filteredData = allPosts.map((post) => {
  //       if (post.tag.includes(readTagState as unknown as string)) {
  //         return post;
  //       }
  //     });

  //     setFilteredPost(filteredData as unknown as PostType[]);
  //   };
  //   useEffect(() => {
  //     postFiltering();
  //   }, []);
  return (
    <div>
      <div>아니</div>
      <ul>
        {taggedPosts.map((post: any) => (
          <List post={post} key={post?.slug} />
        ))}
      </ul>
    </div>
  );
};
export default TagList;
type Params = {
  params: {
    tag: string;
  };
};
export async function getStaticProps({ params }: Params) {
  console.log(params);
  const taggedPosts = getByTag(params.tag);

  return {
    props: {
      taggedPosts,
    },
  };
}

export const getStaticPaths = async () => {
  const posts = getMetadata();
  const temp: any = [];
  for (const ele of posts) {
    temp.push(ele.tags);
  }
  console.log(temp);
  return {
    paths: posts.map((t) => {
      console.log(t);
      if (t.tags.length > 1) {
        for (const ele of t.tags) {
          return {
            params: {
              tag: ele,
            },
          };
        }
      } else {
        return {
          params: {
            // tag: path.,
            tag: t.tags.join(""),
          },
        };
      }
    }),
    fallback: false,
  };
};
