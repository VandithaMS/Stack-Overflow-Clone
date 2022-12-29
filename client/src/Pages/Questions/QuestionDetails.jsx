import React, {useState} from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import up from '../../assets/up.svg'
import down from '../../assets/down.svg'
import './Question.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAns from './DisplayAns'
import { postAnswers, deleteQuestion, voteQuestion } from '../../actions/question'

const QuestionDetails = () => {

    const {id} = useParams()
    const questionList = useSelector(state=>state.questionReducer)

    // var questionList = [{
    //     _id:1,
    //     upVotes:2,
    //     downVotes:1,
    //     votes:3,
    //     noOfAns:1,
    //     questionTitle:"What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ['java','node.js','reactjs','mongo db','express js'],
    //     userPosted:"Jax",
    //     userId:1,
    //     askedOn:"Jan 1",
    //     answer:[{
    //       ansBody:"This is answer",
    //       userAns:"Abc",
    //       ansOn:"Jan 10",
    //       userId:2
    //     }]
    //   },
    // ]

  const [ans, setAns] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const User = useSelector((state)=>state.currentUserReducer)
  const location = useLocation()
  const url = 'http://localhost:3000' + location.pathname

  const handleSubmit =(e, answerLen)=>{
    e.preventDefault()
    if(User===null){
        alert('Login or Signup to post answer')
        navigate('/Auth')
    }
    else if (!ans){
        alert('Answer cannot be null')
    }
    else{
        dispatch(postAnswers({id, noOfAns:answerLen+1, ansBody:ans, userAns: User.result.name, userId:User.result._id}))
        setAns('')
    }
  }

  const handleShare = () =>{
      copy(url)
      alert('The link has been copied : '+url)
  }

  const handleDelete=()=>{
    dispatch(deleteQuestion(id, navigate)) 
  }

  const handleUpvotes=()=>{
      dispatch(voteQuestion(id,'upVote',User.result._id))
  }
  const handleDownvotes=()=>{
    dispatch(voteQuestion(id,'downVote',User.result._id))
}

  return (
    <div className='question-details-page'>
        {
            questionList.data === null ? <h1>Loading...</h1> :
            <>
            {
                questionList.data.filter(question => question._id.toString()===id).map(question=>(
                    <div key={question._id}>
                        <section className='question-details-div'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-div2'>
                                <div className='question-votes'>
                                    <img src={up} alt="up vote" width='20' className='votes-icon' onClick={handleUpvotes}/>
                                    <p>{question.upVotes.length - question.downVotes.length}</p>
                                    <img src={down} alt="down vote" width='20' className='votes-icon' onClick={handleDownvotes}/>
                                </div>
                                <div className='question-details-div3' width={{width:'100%'}}>
                                    <div className='question-body'>{question.questionBody}</div>
                                    <div className='question-details-tag'>
                                        {
                                            question.questionTags.map((tag)=>(
                                                <p key={tag}>{tag}</p>
                                            ))
                                        }
                                    </div>
                                    <div className='question-actions-user'>
                                        <div>
                                            <button type='button' onClick={handleShare}>Share</button>
                                            {
                                                User?.result?._id === question.userId && (
                                                <button type='button' onClick={handleDelete}>Delete</button>)
                                            }
                                        </div>
                                        <div>
                                            <p>asked {moment(question.askedOn).fromNow()}</p>
                                            <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                <Avatar backgroundColor='orange' borderRadius='4px' px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>{question.userPosted}</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                            question.noOfAns !== 0 &&
                            <section>
                                <h3 className='noofans'>{question.noOfAns} answers</h3>
                                <DisplayAns key={question._id} question={question} handleShare={handleShare}/>
                            </section>
                        }
                        <section className='post-ans-div'>
                            <h3>Your Answer</h3>
                            <form onSubmit={(e)=> handleSubmit(e, question.answer.length)}>
                                <textarea columns="30" rows="10" onChange={(e)=>setAns(e.target.value)}></textarea><br/>
                                <input type='submit' className='post-ans-btn' value='Post Your Answer'/>
                            </form>
                            <p>
                                Browse other questions tagged 
                                {
                                    question.questionTags.map(tag=>(
                                        <Link to='/Tags' className='ans-tags' key={tag}> {tag} </Link>
                                    ))
                                } or 
                                <Link to='/AskQuestion' style={{textDecoration:"none", color:'#009dff'}}> ask your own question.</Link>
                            </p>
                        </section>
                    </div>
                ))
            }
            </>
        }
    </div>
  )
}

export default QuestionDetails