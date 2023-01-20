import express from 'express'
import auth from '../middlewares/auth.js'
import { checkNumQuestions, addPlan } from '../controllers/Plan.js'
import checkPlan from '../controllers/Plan.js'

const route = express.Router()
route.post('/checkplan', checkPlan)
route.post('/checknum', checkNumQuestions)
route.post('/addplan',auth,addPlan)

export default route;