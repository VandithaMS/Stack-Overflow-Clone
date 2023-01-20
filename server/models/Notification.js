import mongoose from "mongoose";
import users from './auth.js'

const notification = mongoose.Schema({
    user:{type:mongoose.Types.ObjectId, required:true, ref:users},
    list:{type:[mongoose.Types.ObjectId], default:[], ref:users},
    names:{type:[String], default:[], ref:users},
    time:{type:[Date], required:true, default:Date.now}
})

export default mongoose.model('notif', notification)