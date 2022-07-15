import { useState, useContext, createContext } from "react";

const context = createContext();

export const usePost = () => {
  const newContext = useContext(context);
  return newContext;
};

export const PostContainer = ({ children }) => {
  const [post, setPost] = useState([]);
  console.log(post);
  return (
    <context.Provider
      value={{
        post,
        setPost,
      }}
    >
      {children}
    </context.Provider>
  );
};
