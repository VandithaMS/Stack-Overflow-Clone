import mongoose from 'mongoose'
import users from './auth.js'

const request = mongoose.Schema({
    user:{type:mongoose.Types.ObjectId, required:true, ref:users},
    req:{type:[mongoose.Types.ObjectId], required:true, ref:users}
})

export default mongoose.model('req',request)