import mongoose from 'mongoose'
import users from './auth.js'

const friends = mongoose.Schema({
    user: {type:mongoose.Schema.Types.ObjectId, ref:users},
    frnd:{type:[mongoose.Schema.Types.ObjectId], ref:users, default:[]},
    names:{type:[String], required:true},
    noFrnds: {type:Number, required:true, default:0}
})

export default mongoose.model('frnds',friends)