import express from 'express';
import {clerkWebhooks} from './routes/userRoutes.js';
import authUser from '../middlewares/auth.js';

const userRouter = express.Router();
userRouter.post('/webhook', clerkWebhooks);
userRouter.get('/credits', authUser, userCredits);

export default userRouter;
