import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import { AddPost } from '../../actions/Post'

const Post = () => {
    
    const [desc, setDesc] = useState('')
    const [link, setLink] = useState('')
    const [video, setVideo] = useState('')

    const User = useSelector((state)=>state.currentUserReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlePost=(e)=>{
        e.preventDefault()
        dispatch(AddPost(User?.result?._id,{userId:User?.result?._id, desc:desc, assetUrl:link, videoUrl:video}, navigate))
    }

  return (
    <div className='ask-question'>
        <div className='ask-ques-div'>
            <h1>Add a new post</h1>
            <form>
                <div className='ask-form-div'>
                <label htmlFor='ask-ques-title'>
                    <h4>Description</h4>
                    <input value={desc} onChange={(e)=>setDesc(e.target.value)} type='text' id='ask-ques-title'/>
                </label>
                <label>
                    <h4>Image or Gif Link(Drive or Online Link)</h4>
                    <input value={link} onChange={(e)=>setLink(e.target.value)} type='text' id='ask-ques-tags'/>
                </label>
                <label>
                    <h4>Video Link(Drive or Online Link)</h4>
                    <input value={video} onChange={(e)=>setVideo(e.target.value)} type='text' id='ask-ques-tags'/>
                </label>
                </div>
                <button onClick={handlePost} style={{width:'70px', marginLeft:'20px'}} type='submit' className='review-btn'>Post</button>
            </form>
        </div>
    </div>
  )
}

export default Post