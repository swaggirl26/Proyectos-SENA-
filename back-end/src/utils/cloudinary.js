// src/utils/cloudinary.js
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

// Carga las variables desde el archivo .env
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default cloudinary;
