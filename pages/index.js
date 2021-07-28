import FeaturedPosts from "../components/homepage/featured-posts";
import Hero from "../components/homepage/hero";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = ({ posts }) => {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
};

export default HomePage;

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};
