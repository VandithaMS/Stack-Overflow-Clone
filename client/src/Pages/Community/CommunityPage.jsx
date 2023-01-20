import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import copy from 'copy-to-clipboard'

import likeImg from '../../assets/like.jpg'
import liked from '../../assets/liked.png'
import Avatar from '../../components/Avatar/Avatar'
import './Community.css'
import { addLike, remLike } from '../../actions/Post'
import likes from './function'

const CommunityPage = ({post, postUser}) => {
    const navigate=useNavigate()
    const user = useSelector(state=>state.currentUserReducer)
    const dispatch = useDispatch()
    const [like, setLike] = useState(false)
    const [imgs, setImgs] = useState(likeImg)
    const [cnt, setCnt] = useState(0)
    // if(post.likes.includes(user?.result?._id)){
    //   setLike(true)
    //   setImgs(liked)
    // }
    useEffect(() => {
      const r = likes(post.likes,user?.result?._id)
      setLike(r)
      if(r){
        setImgs(liked)
      }
    }, [dispatch])
    
    const handleLike=()=>{
      if(like === false){
      // console.log(user?.result?._id)
      dispatch(addLike(post._id,user?.result?._id))
      setLike(true)
      setImgs(liked)
      setCnt(cnt+1)
      }else{
        dispatch(remLike(post._id,user?.result?._id))
        setLike(false)
        setImgs(likeImg)
        setCnt(cnt-1)
      }
    }
    var url = 'http://localhost:3000/share/post/' + post._id
    const handleShare = () =>{
      copy(url)
      alert('The link has been copied : '+url)
  }
  return (
    <div className='com-div1'>
        <div>
            <button onClick={()=>navigate(`/user/${postUser._id}`)} className='com-btn'>
            <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white">{postUser?.name.charAt(0).toUpperCase()}</Avatar>
            <h5>{postUser?.name}</h5>
            </button>
        </div>
        <br/><br/>
        <div className='com-det'>
            <p>{post.desc}</p>
            <br/>{
              post.assetUrl && <img src={post.assetUrl} alt='post' width='50%' height='auto' />
            }
            <div>
            {
              post.videoUrl &&
            <div>
            <video width="320" height="240" controls>
            <source src={post.videoUrl} type="video/mp4"/>
            Your browser does not support the video tag.
            </video></div>
            }
            <button className='thumbs-up-btn' onClick={handleLike}>
            <span>
              {/* <div class="material-symbols-outlined">thumb_up</div> */}
              <img className='img-like' src={imgs} alt="like"/>
            </span>
            </button>
            
            {/* <button onClick={()=>{}}>
              <span>
              <div class="material-symbols-outlined">thumb_down</div>
              <div>Dislike</div>
              </span>
            </button> */}
            <button onClick={()=>handleShare()} className='com-btn-send share-btn-post' >
              <span>
              <div class="material-symbols-outlined">send</div>
              {/* <div>Share</div> */}
              </span>
            </button>
            <div>{post.likes.length + cnt} Likes</div>
            </div>
            {/* <div>
            <video width="320" height="240" autoplay>
              <source src="movie.mp4" type="video/mp4">
              Your browser does not support the video tag.
            <video/>
            </div> */}
        </div>

    </div>
  )
}

export default CommunityPage