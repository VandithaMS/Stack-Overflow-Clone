import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { onePost } from '../../actions/Post'

const SharePost = () => {

    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()
    const data = params;
    // console.log(data.id)
    useEffect(() => {
      dispatch(onePost(data.id))
    }, [])
    // dispatch(onePost(data.id))
    const p = useSelector((state)=>state.OnePostReducer)
    // console.log(p)
    navigate(`/post/${p?._id}`,{
      state:{
          post:p,
      }
    });  
  return (
    <div style={{marginTop:'80px'}}>Loading..</div>
  )
}

export default SharePost