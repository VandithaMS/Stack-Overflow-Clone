import frnds from '../models/friends.js'
import addpost from '../models/Community.js'
import mongoose from 'mongoose'

export const addPost = async(req,res) =>{
    const {userId, desc, assetUrl, videoUrl} = req.body
    const add = new addpost({userId, desc, assetUrl,videoUrl})
    try {
        await add.save()
        res.status(200).json('Post added')
    } catch (error) {
        res.status(409).send("Couldn't add post")
    }
}

export const fetchUserPosts = async(req,res)=>{
    const {id:userId} = req.params
    if(!mongoose.Types.ObjectId.isValid(userId)){
        return res.status(404).send('Posts not available...')
    }
    try {
        const data = await addpost.find({userId})
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json('Something went wrong...')
    }
}

export const onePost = async(req,res)=>{
    const {id:_id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Posts not available...')
    }
    try {
        const data = await addpost.findById(_id)
        res.status(200).json(data)
    } catch (error) {
        res.status(409).json("Couldn't load post...")
    }
}

export const allPost = async(req,res)=>{
    const {id} = req.body
    try {
        const frndList = await frnds.findOne({user:id})
        const l = frndList.frnd
        var list = []
        for ( const i of l){
            const data = await addpost.find({userId:i})
            list.push(data)
        }
        list = dataSort(list)
        res.status(200).json(list[0].slice(0,10))
    } catch (error) {
        res.status(409).json("Not found...")
    }
}

const dataSort = (data) =>{
    data = data.sort((a,b)=>{
        if (a.time>b.time){
            return -1
        }
    })
    return data
}

