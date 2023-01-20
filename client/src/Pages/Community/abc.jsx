import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CommunityPage from './CommunityPage'
import { oneUser } from '../../actions/users'

const Abc = ({post}) => {
  const dispatch=useDispatch()
  dispatch(oneUser(post.userId))
  const postUser = useSelector(state=>state.oneUserReducer)

  return (
    <CommunityPage post={post} postUser={postUser}/> 
  )
}

export default Abc