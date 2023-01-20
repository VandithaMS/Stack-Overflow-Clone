import React, {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import { fetchAllUsers } from '../../actions/users'
import Leftsidebar from '../../components/Sidebar/Leftsidebar'
import Avatar from '../../components/Avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UserProfile.css'
import { fetchUserPosts } from '../../actions/Post'
import { frndList, getReq, sendReq } from '../../actions/users'

const UserProfile = () => {

    const {id} = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentUsers = localStorage.getItem('Profile') //useSelector((state)=>state.currentUserReducer)
    const currentUser = JSON.parse(currentUsers)
    const users = useSelector((state)=>state.usersReducer)
    const userProfile = users.filter((user)=> user._id===id)[0]
    // console.log(userProfile.name)
    // console.log(currentUser)
    const [Switch, setSwitch] = useState(false)
    const [btn, setbtn] = useState('Add Friend')

    useEffect(() => {
        dispatch(fetchUserPosts(id))
        dispatch(frndList(currentUser?.result?._id))
        dispatch(getReq(currentUser?.result?._id))
        dispatch(fetchAllUsers(currentUser?.result?._id))
    }, [])

    const frnds = useSelector(state=>state.frndListReducer)[0]
    const reqs = useSelector((state)=>state.getReqReducer)
    const reqList = reqs.data
    var x=false;
    if(frnds){
    frnds.frnd.forEach(element => {
        if(element === id){
            x=true
        }
    });
}
    
    const handleFrnd = ()=>{
        dispatch(frndList(currentUser?.result?._id))
        navigate('/user/frnds')
    }
    const handleAdd= ()=>{
        // dispatch(addFrnd(currentUser?.result?._id, id))
        dispatch(sendReq(currentUser?.result?._id, id))
        setbtn("Requested")
        // window.location.reload()
    }

  return (
    <div className='home-div1'>
        <Leftsidebar/>
        <div className='home-div2'>
            <section>
                <div className='user-details-div'>
                <div className='user-details'>
                    <Avatar backgroundColor='purple' color='white' fontSize='50px'  px='40px' py='30px'>{userProfile?.name.charAt(0).toUpperCase()}</Avatar>
                    <div className='user-name'>
                        <h1>{userProfile.name}</h1>
                        <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(userProfile?.joinedOn).fromNow()}</p>
                    </div>
                    {
                    currentUser?.result?._id === id ? (
                    <div>
                        <button type='button' className='edit-profile-btn frnd' onClick={handleFrnd}>Friends</button>
                    </div>
                    ):(
                    <div>
                    {x !== true && ( reqList && reqList.includes(id) ? (<div>
                        <button type='button' className='edit-profile-btn frnd' onClick={handleAdd}>Requested</button>
                    </div>):(
                        <div>
                        <button type='button' className='edit-profile-btn frnd' onClick={handleAdd}>{btn}</button>
                    </div>
                    ))}</div>)
                }
                </div>
                {
                    currentUser?.result?._id === id && (
                        <button type='button' className='edit-profile-btn' onClick={()=>setSwitch(true)}>
                            <FontAwesomeIcon icon={faPen}/> Edit Profile
                        </button>
                    )
                }
                </div>
                <>
                {
                    Switch ? (
                        <EditProfileForm currentProfile={userProfile} setSwitch={setSwitch}/>
                    ):(
                        <ProfileBio bool={x} currentProfile={userProfile}/>
                    )
                }
                </>
            </section>
        </div>
    </div>
  )
}

export default UserProfile