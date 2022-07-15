import { usePost } from "../context/PostContainer";

const HomePage = () => {
  const { post, setPost } = usePost();
  return (
    <div>
      HomePage
      <button onClick={setPost("hello")}>Add</button>
    </div>
  );
};

export default HomePage;
