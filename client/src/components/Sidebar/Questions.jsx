import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Questions = ({question}) => {
  return (
    <div className='display-question-div'>
        <div className='display-votes'>
            <p>{question.upVotes.length-question.downVotes.length}</p>
            <p>votes</p>
        </div>
        <div className='display-votes'>
            <p>{question.noOfAns}</p>
            <p>answers</p>
        </div>
        <div className='display-question-details'>
          <Link to={`/Questions/${question._id}`} className='question-title-link'>{question.questionTitle}</Link>
          <div className='display-tags-time'>
            <div className='display-tags'>
              {
                question.questionTags.map((tag)=>(
                  <p key={tag}>{tag}</p>
                ))
              }
            </div>
            <div className='display-time'>
              <p>asked {moment(question.askedOn).fromNow()} {question.userPosted}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Questions