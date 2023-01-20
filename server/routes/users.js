import express from 'express';
import {login, signup} from '../controllers/auth.js'
import getAllUsers, {oneUser, frndList, sendFrndReq, getNotif, getCount, getReq} from '../controllers/users.js';
import auth from "../middlewares/auth.js";
import { updateProfile } from '../controllers/users.js';
import { addPost } from '../controllers/AddPost.js';
import { fetchUserPosts } from '../controllers/AddPost.js';

const useRouter = express.Router();
useRouter.post('/signup', signup)
useRouter.post('/login', login)

useRouter.get('/getAllUsers', getAllUsers)
useRouter.patch('/update/:id',auth,updateProfile)

useRouter.post('/post',addPost)
useRouter.get('/post/:id',fetchUserPosts)
useRouter.get('/:id',oneUser)

useRouter.get('/frnd/:id', frndList)
useRouter.post('/sendReq', sendFrndReq)
useRouter.get('/notif/:id', getNotif)
useRouter.get('/count/:id', getCount)
useRouter.get('/req/:id', getReq)

export default useRouter