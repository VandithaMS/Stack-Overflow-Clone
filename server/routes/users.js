import express from 'express';
import {login, signup} from '../controllers/auth.js'
import getAllUsers from '../controllers/users.js';
import auth from "../middlewares/auth.js";
import { updateProfile } from '../controllers/users.js';

const useRouter = express.Router();
useRouter.post('/signup', signup)
useRouter.post('/login', login)

useRouter.get('/getAllUsers', getAllUsers)
useRouter.patch('/update/:id',auth,updateProfile)

export default useRouter