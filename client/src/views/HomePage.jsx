import { usePost } from "../context/PostContainer";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

const HomePage = () => {
  const { posts } = usePost();

  if (posts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">There are no posts</h1>
      </div>
    );
  }

  return (
    <div className="text-white">
      <Link to="/new">Add</Link>
      <div className="grid grid-cols-3 gap-2">
        {posts.map((item) => (
          <PostCard key={item._id} post={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
