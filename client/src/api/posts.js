import axios from "axios";

export const getPosts = async () => {
  return await axios.get("/posts");
};

export const createPostRequest = async (post) => {
  return await axios.post("/posts", post);
};

export const deletePostRequest = async (id) => {
  return await axios.delete("/posts/" + id);
};
