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
  const taggedPosts = getByTag(params.tag);

  return {
    props: {
      taggedPosts,
    },
  };
}

export const getStaticPaths = async () => {
  const posts = getMetadata();
  const temp: any[] = [];
  for (let i of posts) {
    if (i.tags.length > 1) {
      for (let j of i.tags) {
        temp.push(j);
      }
    } else {
      // console.log(i.tags);
      temp.push(i.tags);
    }
  }
  // console.log(temp);
  return {
    paths: temp.map((t) => {
      // console.log(t);
      if (typeof t === "string") {
        return {
          params: {
            tag: t,
          },
        };
      }
      if (typeof t === "object") {
        return {
          params: {
            tag: t.join(""),
          },
        };
      }
    }),
    fallback: true,
  };
};
