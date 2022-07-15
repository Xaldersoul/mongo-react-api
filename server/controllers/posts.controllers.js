import Post from "../models/post.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.send(posts);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image;
    if (req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    const post = new Post({ title, description, image });
    await post.save();
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    return res.send("Updating a post");
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const removedPost = await Post.findByIdAndDelete(req.params.id);
    if (!removedPost) {
      return res.status(404).send("Post not found");
    }
    if (removedPost.image) {
      await deleteImage(removedPost.image.public_id);
    }
    return res.send(removedPost);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    return res.json(post);
  } catch (error) {
    return res.status(500).send(error);
  }
};
