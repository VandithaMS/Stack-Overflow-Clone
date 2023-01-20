import mongoose from 'mongoose'
import users from './auth.js'

const planSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:users},
    plan:{type:String, required:true},
    date:{type:Date, default:Date.now, required:true}
})

export default mongoose.model('Plan', planSchema)