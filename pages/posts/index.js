import { getAllPosts } from "../../lib/posts-util";
import AllPosts from "../../components/posts/all-posts";

const AllPostPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export default AllPostPage;

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
