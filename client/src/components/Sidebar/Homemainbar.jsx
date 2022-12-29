import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Homemainbar.css'
import Questions from './Questions'

const Homemainbar = () => {

  const User=1;
  const navigate=useNavigate()
  const questionList = useSelector(state=>state.questionReducer)
  // console.log(questionList)

  const checkAuth = () =>{
    if(User === null){
      alert("Login or Sign up to a ask question")
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }

  // var questionList = [{
  //   _id:1,
  //   upVotes:2,
  //   downVotes:1,
  //   votes:3,
  //   noOfAns:2,
  //   questionTitle:"What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ['java','node.js','reactjs','mongo db','express js'],
  //   userPosted:"Jax",
  //   userId:1,
  //   askedOn:"Jan 1",
  //   answer:[{
  //     ansBody:"This is answer",
  //     userAns:"Abc",
  //     ansOn:"Jan 10",
  //     userId:2
  //   }]
  // },
// ]
  const location = useLocation()

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        </div>
        <div>
          {
            questionList.data === null ? <h1>Loading...</h1> : 
            <>
            <p>{questionList.data.length} Questions</p>
            <>
            {
              questionList.data.map((question) => (
                <Questions question={question} key ={question.userId} />
              ))
            }
            </>
            </>
          }
        </div>
      </div>
  )
}

export default Homemainbar