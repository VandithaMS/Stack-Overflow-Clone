import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import './Users.css'

const UserList = () => {
    const users = useSelector((state)=> state.usersReducer)
  return (
    <div className='userList-div'>
      {
        users.map((user)=>(
          <Link to={`/User/${user._id}`} className='user-profile-link'>
            <h3>{user.name.charAt(0).toUpperCase()}</h3>
            <h5>{user.name}</h5>
          </Link>
        ))
      }
    </div>
  )
}

export default UserList