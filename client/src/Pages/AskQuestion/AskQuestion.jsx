import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './AskQuestion.css'
import askQuestion from '../../actions/question'
import { checkPlan, checkNumQuestions } from '../../actions/plan'

const AskQuestion = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const User = useSelector(state=>state.currentUserReducer)
    const Num = useSelector(state=>state.planReducer)

    useEffect(()=>{
        dispatch(checkNumQuestions(User?.result?._id))
        dispatch(checkPlan(User?.result?._id))
      },[dispatch])

  const [questionTitle, setQuestionTitle] = useState('')
  const [questionBody, setQuestionBody] = useState('')
  const [questionTags, setQuestionTags] = useState('')

  const form = "e.g. is there an R function for finding index of an element in a vector?"
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!questionTitle || !questionBody || !questionTags){
        alert('Enter all the data properly')
      }
    else{
        const data = localStorage.getItem('Plan')
        if(!data){
        navigate('/plan',{state:{questionTitle:questionTitle,questionBody:questionBody,questionTags:questionTags,userPosted:User?.result.name, userId:User?.result._id}})
        }else if(data==="1"){
            if(Num>=5){
                alert("Maximum limit to ask questions is reached. Silver plan can post only 5 questions a day.To change plan visite profile page.")
                navigate('/')
            }else{
                dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted:User?.result.name, userId:User?.result._id}, navigate))
            }
        }else if(data==='2'){
            dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted:User?.result.name, userId:User?.result._id}, navigate))
        }
    }
  }
  const handleKey=(e)=>{
      if(e.key === 'Enter'){
          setQuestionBody(questionBody+"\n")
      }
  }

  return (
    <div className='ask-question'>
        <div className='ask-ques-div'>
            <h1>Ask a public Question</h1>
            <form onSubmit={handleSubmit}>
                <div className='ask-form-div'>
                <label htmlFor='ask-ques-title'>
                    <h4>Title</h4>
                    <p>Be specific and imagine you’re asking a question to another person.</p>
                    <input type='text' placeholder={form} id='ask-ques-title' onChange={(e)=>setQuestionTitle(e.target.value)}/>
                </label>
                <label htmlFor='ask-ques-body'>
                    <h4>What are the details of your problem?</h4>
                    <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                    <textarea value={questionBody} id='ask-ques-body' onKeyPress={handleKey} rows="10" columns="30"  onChange={(e)=>setQuestionBody(e.target.value)}></textarea>
                </label>
                <label htmlFor='ask-ques-tags'>
                    <h4>Tags</h4>
                    <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                    <input type='text' placeholder='e.g. (xml typescript wordpress)' id='ask-ques-tags'  onChange={(e)=>setQuestionTags(e.target.value.split(" "))}/>
                </label>
                </div>
                <button type='submit' className='review-btn'>Review your question</button>
            </form>
        </div>
    </div>
  )
}

export default AskQuestion