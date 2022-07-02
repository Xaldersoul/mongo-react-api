import { Router } from "express";
import { getPosts } from "../controllers/posts.controllers.js";

const router = Router();

router.get("/posts", getPosts);

router.post("/posts", (req, res) => {
  return res.send("new Posts");
});

router.put("/posts", (req, res) => {
  return res.send("Updating a post");
});

router.delete("/posts", (req, res) => {
  return res.send("Delete a post");
});

router.get("/posts/:id", (req, res) => {
  return res.send("Get a post");
});
export default router;
