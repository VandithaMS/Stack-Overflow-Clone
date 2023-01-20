import express from 'express'
import auth from '../middlewares/auth.js'
import { addFrnd, remFrnd } from '../controllers/users.js'

const route = express.Router()
route.post('/',auth,addFrnd)

export const remRoute = express.Router()
remRoute.post('/',auth,remFrnd)

export default route