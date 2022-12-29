import React from 'react'
import './Users.css'
import Leftsidebar from '../../components/Sidebar/Leftsidebar'
import UserList from './UserList'

const Users = () => {

  return (
    <div className='home-div1'>
       <Leftsidebar/>
       <div className='home-div2'>
         <h1>Users</h1>
           <UserList/>
       </div>
    </div>
  )
}

export default Users