import React from 'react'
import {useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

// import { onePost } from '../../actions/Post'

const ProfileBio = ({bool,currentProfile}) => {

    const navigate = useNavigate()
    var plan = localStorage.getItem('Plan')
    const {id} = useParams();
    const currentUser = useSelector((state)=>state.currentUserReducer)
    const posts = useSelector(state=>state.Community)
    if(currentUser?.result?._id === id){
        bool = true
    }
    // const dispatch = useDispatch()
    const handleDiv=(p)=>{
        // dispatch(onePost(p._id))
        // dispatch(oneUser(p.userId))
        navigate(`/post/${p._id}`,{
            state:{
                post:p,
            }
        });
    };

    var p = ''
    if(plan==="2"){
        p='Gold'
    }else if (plan === '1'){
        p='Silver'
    }else{
        plan=null
    }
  return (
    <div>
    <div className='profile-tag'>
        {
            currentProfile?.tags.length !== 0 ? (
                <>
                <h4>Tags watched</h4>
                {
                currentProfile.tags.map((tag)=>(
                    <p key={tag}>{tag}</p>
                ))
                }
                </>
            ):(
                <p>0 tags watched</p>
            )
        }
    </div>
    <div className='profile-abt'>
        {
            currentProfile?.about ?(
                <>
                <h4>About</h4>
                <p>{currentProfile.about}</p>
                </>
            ):(
                <p>No bio found</p>
            )
        }
        {
            currentUser?.result?._id === id && (
                plan ? (<><h4 style={{fontWeight:'500'}}>subscription</h4><p className='plan-p'>Your choosen plan : {p} </p></>) : (<>
                <h4 style={{fontWeight:'500'}}>subscription</h4>
                <p>No subscription. So you can post only one question a day. </p>
                <button type='button' className='sub-btn' onClick={()=>navigate('/plan')}>Subscribe</button></>
                ))
        }
    </div>
    <div className='profile-post-mainDiv'>
        {
            currentUser?.result?._id === id && (
                <button onClick={()=>navigate('/Post')} className='profile-new-post-btn'>Add a new post</button>
            )
        }
        {
            !bool && <div style={{marginTop:'40px', color:'#0074cc'}}>Make friend to see their posts</div>
        }
        {
            bool && posts.length>0 && <h4 style={{fontWeight:'450', marginTop:'40px'}}>Posts</h4>
        }
        {
            bool && posts.map((post)=>(
                <div onClick={()=>handleDiv(post)} className='profile-post-div'>
                    <img className='profile-post' src={post.assetUrl} alt="post"/>
                    <p className='profile-post-p'>{post.desc}</p>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default ProfileBio