import mongoose from 'mongoose';
import plans from '../models/Plan.js';
import Questions from '../models/Question.js'
import dates from './dates.js';

const checkPlan = async(req,res)=>{
    const {userId} = req.body
    try {
        const existPlan = await plans.find({userId:String(userId)})
        if (existPlan){
            const planData = await plans.findOne({userId:String(userId)})
            if (planData){
                const days = dates(planData.date.toJSON().slice(0,10))
                if(days<=30){
                    res.status(200).json(existPlan[0].plan)
                }
            }else{
                await plans.findOneAndRemove({userId:String(userId)})
                res.status(200).json(null)}
        }else{
            res.status(200).json(null)
        }
    } catch (error) {
        res.status(500).json("Something went wrong...")
    }
}

export const addPlan = async(req,res)=>{
    const {userId,plan} = req.body
    if(!mongoose.Types.ObjectId.isValid(userId)){
        return res.status(404).send('Question not available...')
    }
    const add = new plans({userId:userId,plan:plan.toString()})
    try {
        await add.save()
        res.status(200).json("Plan added successfully...")
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't add the plan")
    }
}

export const checkNumQuestions = async(req,res)=>{
    const {userId} =req.body
    try {
        const l = await Questions.find({userId})
        // const d=[]
        // l.forEach(ele => {
        //     if (ele.askedOn.toJSON().slice(0,10) === new Date().toJSON().slice(0, 10)){
        //         d.push(ele)
        //     }
        // });
        // console.log(new Date().toJSON().slice(0, 10))
        const d=l.filter((ele)=>ele.askedOn.toJSON().slice(0,10) === String(new Date().toJSON().slice(0, 10)))
        res.status(200).json(d.length)
    } catch (error) {
        console.log(error)
        res.status(500).json("Something went wrong...")
    }
}

export default checkPlan;