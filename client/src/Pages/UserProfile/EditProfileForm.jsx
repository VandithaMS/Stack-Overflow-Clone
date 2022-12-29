import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {updateProfile} from '../../actions/users.js'

const EditProfileForm = ({currentProfile, setSwitch}) => {

    const [name, setName] = useState(currentProfile?.name)
    const [about, setAbout] = useState(currentProfile?.about)
    const [tags, setTags] = useState('')
    const dispatch = useDispatch()

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(tags.length===0){
        dispatch(updateProfile(currentProfile?._id, { name, about, tags:currentProfile?.tags}))
      }else{
        dispatch(updateProfile(currentProfile?._id, {name, about, tags}))
      }
      setSwitch(false)
    }

  return (
    <div>
        <h1 className='edit-profile-title'>
            Edit Your Profile
        </h1>
        <h1 className='edit-profile-title2'>
            Public information
        </h1>
        <form className='edit-profile-form' onSubmit={handleSubmit}>
             <label htmlFor='name'>
                <h3>Display name</h3>
                <input type="text" id='name' value={name} onChange={(e)=>setName(e.target.value)} />
             </label>
             <label htmlFor='about'>
                <h3>About me</h3>
                <textarea type="text" rows="10" columns="30" id='about' value={about} onChange={(e)=>setAbout(e.target.value)} />
             </label>
             <label htmlFor='tags'>
                <h3>Watched tags</h3>
                <p>Add tags separated by 1 space</p>
                <input type="text" id='tags' onChange={(e)=>setTags(e.target.value.split(" "))} />
             </label><br/>
             <input type='submit' value='Save profile' className='edit-submit-btn' />
             <button type='button' className='edit-cancel-btn' onClick={()=>setSwitch(false)}>Cancel</button>
        </form>
    </div>
  )
}

export default EditProfileForm