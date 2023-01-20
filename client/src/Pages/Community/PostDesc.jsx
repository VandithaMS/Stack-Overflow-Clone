import React, {useEffect} from 'react'
import Leftsidebar from '../../components/Sidebar/Leftsidebar'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom"

import CommunityPage from './CommunityPage'
import { oneUser } from '../../actions/users'

const PostDesc = () => {

  const dispatch=useDispatch()
  const location = useLocation()
  // dispatch(onePost(_id))
    // alert(_id)
  // console.log(_id)
  // useEffect(() => {
  //   dispatch(onePost(_id))
  // }, [])
  // const post = useSelector(state=>state.OnePostReducer)
  // console.log(post)
  var post = location.state.post;
  useEffect(() => {
    post = location.state.post;
    dispatch(oneUser(post?.userId))
  }, []);

  const postUser = useSelector(state=>state.oneUserReducer)

  return (
    <div className='home-div1'>
        <Leftsidebar/>
        <div className='home-div2'>
       <CommunityPage post={post} postUser={postUser}/>
        </div>
    </div>
  )
}

export default PostDesc