import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    questionTitle: {type:String, required:'Question must have title'},
    questionBody: {type:String, required:'Question must have Body'},
    questionTags: {type:[String], required:'Question must have tags'},
    noOfAns: {type:Number, default:0},
    upVotes: {type:[String], default:[]},
    downVotes: {type:[String], default:[]},
    userPosted: {type:String, required:'Question must have an author'},
    userId: {type:String},
    askedOn: {type:Date, default:Date.now},
    answer:[{
        ansBody: String,
        userAns: String,
        userId:String,
        ansOn: {type:Date, default:Date.now}
    }]
})

export default mongoose.model('Question',questionSchema)