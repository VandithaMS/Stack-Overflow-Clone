import mongoose from 'mongoose'
import Question from '../models/Question.js'

export const postAnswer = async (req,res)=>{
    const {id:_id} = req.params
    const {noOfAns, ansBody, userAns, userId} = req.body
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Question not available...')
    }
    
    try {
        const updatedQuestion = await Question.findByIdAndUpdate(_id, {$addToSet:{'answer':{ansBody, userAns, userId}}})
        updateNoOfAns(_id, noOfAns)
        res.status(200).json(updatedQuestion)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateNoOfAns = async (_id, noOfAns) =>{
    try {
        await Question.findByIdAndUpdate(_id, {$set:{'noOfAns': noOfAns}})
    } catch (error) {
        console.log(error)
    }
}

export const deleteAnswer = async(req,res) =>{
    const {id:_id} = req.params
    const { ansId, noOfAns} = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Question not available...')
    }
    if(!mongoose.Types.ObjectId.isValid(ansId)){
        return res.status(404).send('Answer not available...')
    }
    updateNoOfAns(_id, noOfAns)
    try {
        await Question.updateOne(
            {_id},
            {$pull:{'answer':{_id:ansId}}}
        )
        res.status(200).json('Answer deleted...')
    } catch (error) {
        res.status(405).json(error)
    }
}