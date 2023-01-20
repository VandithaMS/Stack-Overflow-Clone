import express from 'express'
import auth from '../middlewares/auth.js'
import { onePost, allPost } from '../controllers/AddPost.js'
import { getLike, addLike, remLike } from '../controllers/Like.js'

const postRoute = express.Router()
postRoute.get('/:id',onePost)
postRoute.post('/like',auth,addLike)
postRoute.post('/unlike',auth,remLike)
postRoute.get('/like/:id',getLike)

postRoute.post('/all',allPost)

export default postRoute