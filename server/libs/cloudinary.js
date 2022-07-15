import { v2 } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const uploadImage = async (filePath) => {
  return await v2.uploader.upload(filePath, {
    folder: "images",
  });
};

export const deleteImage = async (public_id) => {
  return await v2.uploader.destroy(public_id);
};
