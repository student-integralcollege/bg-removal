import express from 'express'; 
import { removeBackground } from '../controllers/imageController.js';
import authUser from '../middlewares/auth.js';
import upload from '../middlewares/multer.js'; // Assuming you have a middleware for handling file uploads

const imageRouter = express.Router();

imageRouter.post('/remove-bg', upload.single('image'), authUser, removeBackground);

export default imageRouter;
