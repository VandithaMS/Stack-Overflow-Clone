import Users from '../models/auth.js'
import mongoose from 'mongoose'
import frnds from '../models/friends.js'
import notif from '../models/Notification.js'
import request from '../models/Req.js'

export const getAllUsers= async(req,res)=>{
    try {
        const allUsers = await Users.find()
        const allUserDetails = []
        allUsers.forEach(user=>{
            allUserDetails.push({_id:user._id, name:user.name, about:user.about, tags:user.tags, joinedOn:user.joinedOn})
        })
        res.status(200).json(allUserDetails)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const updateProfile=async(req,res)=>{
    const {id:_id} = req.params;
    const {name, about, tags} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Question not available...')
    }
    try {
        const updatedProfile = await Users.findByIdAndUpdate(_id, {$set:{'name':name, 'about':about, 'tags':tags}}, {new:true})
        res.status(200).json(updatedProfile)
    } catch (error) {
        res.status(405).json({message:error.message})
    }
}

export const oneUser=async(req,res)=>{
    const {id:userId} = req.params
    if(!mongoose.Types.ObjectId.isValid(userId)){
        return res.status(404).send('Question not available...')
    }
    try {
        const data = await Users.findById(userId)
        res.status(200).json(data)
    } catch (error) {
        res.status(404).send('User is not available...')
    }
}

export const frndList=async(req,res)=>{
    const {id:user} = req.params
    if(!mongoose.Types.ObjectId.isValid(user)){
        return res.status(404).send('Question not available...')
    }
    try {
        const data = await frnds.find({user})
        res.status(200).json(data)
    } catch (error) {
        res.status(405).json({message:error.message})
    }
}

export const sendFrndReq = async(req,res)=>{
    const {sen, rec} = req.body
    try {
        const x = await notif.findOne({user:rec})
        const n = await Users.findById(sen)

        if(x){
            await notif.findOneAndUpdate({user:rec},{$addToSet:{'list':sen}})
            await notif.findOneAndUpdate({user:rec},{$addToSet:{'names':n.name}})
        }else{
            const x = new notif({user:rec,list:sen, names:n.name})
            x.save()
        }
        reqs(sen,rec)
        res.status(200).json('Added')
    } catch (error) {
        res.status(405).json("Coudn't add")
    }
}

const reqs = async(id1,id2) =>{
    try {
        const user = await request.findOne({user:id1})
        if(user){
            await request.findByIdAndUpdate(user._id, {$addToSet:{'req':id2}})
        }else{
            const u = new request({user:id1, req:id2})
            u.save()
        }
    } catch (error) {
        console.log(error)
    }
}

const remReqs = async(id1,id2) =>{
    try {
        const user = await request.findOne({user:id2})
        if(user){
            await request.findByIdAndUpdate(user._id, {$pull:{'req':id1}})
        }
    } catch (error) {
        console.log(error)
    }
}

export const getNotif = async(req,res)=>{
    const {id} = req.params
    //console.log(id)
    try {
        const x = await notif.findOne({user:id})
        res.status(200).json(x)
    } catch (error) {
        res.status(409).json("No notification")
    }

}
export const getCount = async(req,res)=>{
    const {id} = req.params
    try {
        const x = await notif.findOne({user:id})
        const c = x.list.length
        res.status(200).json(c)
    } catch (error) {
        res.status(409).json("No notification")
    }

}

export const addFrnd = async(req,res)=>{
    const {user, frnd} = req.body
    try {
        const x = await frnds.findOne({user:user})
        const n = await Users.findById(frnd)
        if(x){
            const c = x.noFrnds+1
            await frnds.findByIdAndUpdate(x._id, {$addToSet:{'frnd':frnd}})
            await frnds.findByIdAndUpdate(x._id, {$addToSet:{'names':n.name}})
            await frnds.findByIdAndUpdate(x._id,{$set:{'noFrnds':c}})
        }
        else{
            const x = new frnds({user:user, frnd:frnd, names:n.name, noFrnds:1})
            x.save()  
        }
        const y = await frnds.findOne({user:frnd})
        const z = await Users.findById(user)
        if(x){
            const c = y.noFrnds+1
            await frnds.findByIdAndUpdate(y._id, {$addToSet:{'frnd':user}})
            await frnds.findByIdAndUpdate(y._id, {$addToSet:{'names':z.name}})
            await frnds.findByIdAndUpdate(y._id,{$set:{'noFrnds':c}})
        }
        else{
            const x = new frnds({user:frnd, frnd:user, names:z.name, noFrnds:1})
            x.save()  
        }
        const cuser = await notif.findOne({user:user})
        const i = cuser.list.findIndex(ele=>ele===frnd)
        const tm = cuser.time[i]
        await notif.findByIdAndUpdate(cuser._id,{$pull:{'list':frnd}})
        await notif.findByIdAndUpdate(cuser._id,{$pull:{'names':n.name}})
        await notif.findByIdAndUpdate(cuser._id,{$pull:{'time':tm}})
        await remReqs(user,frnd)
        res.status(200).json('Added')
    } catch (error) {
        res.status(405).json("Coudn't add")
    }
}

export const remFrnd = async(req,res)=>{
    const {user, frnd} = req.body
    
    // if(!mongoose.Types.ObjectId.isValid(user)){
    //     return res.status(404).send('Question not available...')
    // }
    // if(!mongoose.Types.ObjectId.isValid(frnd)){
    //     return res.status(404).send('Question not available...')
    // }
    var x = await frnds.findOne({user:user})
    const nm = await Users.findById(frnd)
    const cnt = x.noFrnds-1
    if(x){
    try {
        await frnds.updateOne(
            {user:user},
            {$pull:{'frnd':frnd}}
        )
        await frnds.updateOne(
            {user:user},
            {$pull:{'names':nm.name}}
        )
        await frnds.findByIdAndUpdate(x._id,{$set:{'noFrnds':cnt}})
    
    x = await frnds.findOne({user:frnd})
    const n = await Users.findById(user)
    const c = x.noFrnds-1
        await frnds.updateOne(
            {user:frnd},
            {$pull:{'frnd':user}}
        )
        await frnds.updateOne(
            {user:frnd},
            {$pull:{'names':n.name}}
        )
        await frnds.findByIdAndUpdate(x._id,{$set:{'noFrnds':c}})

        res.status(200).json('Removed')
    } catch (error) {
        console.log(error)
        res.status(405).json("Coudn't Remove")
    }}
}

export const getReq = async(req,res)=>{
    const {id} = req.params
    try {
        const data = await request.findOne({user:id})
        if(data){
            res.status(200).json(data.req)
        }else{
        res.status(200).json(null)}
    } catch (error) {
        console.log(error)
    }
}

export default getAllUsers
