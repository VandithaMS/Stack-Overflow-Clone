import addpost from '../models/Community.js'
import mongoose from 'mongoose'

export const getLike=async(req,res)=>{
    const {id} = req.params
    try {
        const post = await addpost.findById(id)
        res.status(200).json(post.likes)
    } catch (error) {
        res.status(409).json("Data not found")
    }
}

export const addLike=async(req,res)=>{
    const {id,like} = req.body

    if(!mongoose.Types.ObjectId.isValid(like)){
        return res.status(404).send('Posts not available...')
    }
    try {
        const post = await addpost.findById(id)
        if(post){
        await addpost.findByIdAndUpdate(post._id, {$addToSet:{'likes':like}})
        }
        res.status(200).json("Like added")
    } catch (error) {
        res.status(409).json("Data not found")
    }
}

export const remLike=async(req,res)=>{
    const {id,like} = req.body
    try {
        const post = await addpost.findById(id)
        if(post){
        await addpost.findByIdAndUpdate(post._id, {$pull:{'likes':like}})
        }
        res.status(200).json("Like removed")
    } catch (error) {
        res.status(409).json("Data not found")
    }
}

