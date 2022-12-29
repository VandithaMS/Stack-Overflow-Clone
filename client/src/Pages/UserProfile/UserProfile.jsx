import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import Leftsidebar from '../../components/Sidebar/Leftsidebar'
import Avatar from '../../components/Avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UserProfile.css'

const UserProfile = () => {

    const {id} = useParams();
    const users = useSelector((state)=>state.usersReducer)
    const userProfile = users.filter((user)=> user._id===id)[0]
    const currentUser = useSelector((state)=>state.currentUserReducer)

    const [Switch, setSwitch] = useState(false)

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
                        <ProfileBio currentProfile={userProfile}/>
                    )
                }
                </>
            </section>
        </div>
    </div>
  )
}

export default UserProfile