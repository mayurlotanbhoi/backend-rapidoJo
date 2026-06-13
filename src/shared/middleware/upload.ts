// src/middleware/upload.ts

import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

import cloudinary from "../../config/cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,

  params: async () => ({
    folder: "jobs",

    allowed_formats: ["jpg", "jpeg", "png", "webp"],

    transformation: [
      {
        width: 1200,
        crop: "limit",
      },
    ],
  }),
});

const upload = multer({
  storage,
});

export default upload;
