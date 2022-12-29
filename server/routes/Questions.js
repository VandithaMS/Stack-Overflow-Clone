import express from "express";
import AskQuestion from '../controllers/Questions.js'
import auth from "../middlewares/auth.js";
import { getAllQuestions, deleteQuestion, voteQuestion } from '../controllers/Questions.js'

const questionRoutes = express.Router()
questionRoutes.post('/Ask',auth, AskQuestion)
questionRoutes.get('/get', getAllQuestions)
questionRoutes.delete('/delete/:id',auth, deleteQuestion)
questionRoutes.patch('/vote/:id',auth, voteQuestion)

export default questionRoutes;