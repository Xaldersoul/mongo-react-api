import { useState, useContext, createContext, useEffect } from "react";
import {
  createPostRequest,
  getPosts,
  deletePostRequest,
} from "../api/posts.js";

const context = createContext();

export const usePost = () => {
  const newContext = useContext(context);
  return newContext;
};

export const PostProvider = ({ children }) => {
  const [posts, setPost] = useState([]);

  const postsRequest = async () => {
    const res = await getPosts();
    setPost(res.data);
  };

  const createPost = async (post) => {
    const res = await createPostRequest(post);
    console.log(res);
    setPost([...posts, res.data]);
  };

  const deletePost = async (id) => {
    console.log(id);
    await deletePostRequest(id);
    setPost(posts.filter((item) => item._id !== id));
  };

  useEffect(() => {
    postsRequest();
  }, []);

  return (
    <context.Provider
      value={{
        posts,
        createPost,
        deletePost,
      }}
    >
      {children}
    </context.Provider>
  );
};
