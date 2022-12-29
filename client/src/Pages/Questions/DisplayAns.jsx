import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import moment from 'moment'

import Avatar from '../../components/Avatar/Avatar'
import {deleteAnswer} from '../../actions/question.js'

const DisplayAns = ({question, handleShare}) => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const User = useSelector(state=>state.currentUserReducer)

    const handleDelete=(ansId, noOfAns)=>{
        dispatch(deleteAnswer(id, ansId,noOfAns-1))
    }

  return (
    <div>
        {
            question.answer.map((ans)=>(
                <div className='display-ans' key={ans._id}>
                    <p>{ans.ansBody}</p>
                    <div className='question-actions-user'>
                        <div>
                            <button type='button' onClick={handleShare}>Share</button>
                            {
                                User?.result?._id === ans.userId && (
                                <button type='button' onClick={()=>handleDelete(ans._id,question.noOfAns)}>Delete</button>)
                            }
                        </div>
                        <div>
                            <p>answered {moment(ans.ansOn).fromNow()}</p>
                            <Link to={`/User/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                <Avatar backgroundColor='green' borderRadius='4px' px='8px' py='5px'>{ans.userAns.charAt(0).toUpperCase()}</Avatar>
                                <div>{ans.userAns}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAns