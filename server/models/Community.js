import mongoose from 'mongoose'
import users from './auth.js'

const addPost = mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, ref:users},
    desc: {type:String, required:true, default:''},
    assetUrl: {type:String},
    videoUrl: {type:String},
    likes: {type:[String], default:[]},
    time: {type:Date, required:true, default:Date.now}
})

export default mongoose.model('Addpost', addPost);