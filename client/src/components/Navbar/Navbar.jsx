import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import { getNotification, getCount } from '../../actions/users'

import setCurrentUser from '../../actions/currentUser'
import logo from '../../assets/logo.png'
import notifLogo from '../../assets/noti.png'
import search from '../../assets/search.svg'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'
import { checkPlan } from '../../actions/plan'

const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  var User = useSelector((state)=>(state.currentUserReducer))
  // console.log(User?.result?._id)
  // const [count, setCount] = useState(0)
  
  useEffect(()=>{
    const token = User?.token
    if(token){
      const decodeToken = decode(token)
      if(decodeToken.exp * 1000 < new Date().getTime()){
        Logout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    dispatch(checkPlan(User?.result?._id))
    dispatch(getNotification(User?.result?._id))
    dispatch(getCount(User?.result?._id))
  },[dispatch,User?.result?._id])
  const notif = useSelector(state=>state.getNotificationReducer)
  var count = notif?.data?.list?.length
  if(count){
    var c =count
  }else{
    c=0
  }

  const Logout = () =>{
    dispatch({type:'LOGOUT'})
    dispatch(setCurrentUser(null))
    navigate('/')
  }

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to="/" className='nav-item nav-logo'>
          <img src={logo} alt='logo' className='sof-img'/>
        </Link>
        <Link to="/" className='nav-item nav-btn'>About</Link>
        <Link to="/" className='nav-item nav-btn'>Products</Link>
        {/* <Link to="/" className='nav-item nav-btn'>For Teams</Link> */}
        <form>
          <input type="text" placeholder="Search..."></input>
          <img src={search} alt='search' className='search-img'/>
        </form>
        {User === null ? 
        <Link to="/Auth" className='nav-item nav-link'>Log in</Link> :
        <>
        <Link to={`/User/${User?.result?._id}`} style={{textDecoration:"none"}}><Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white">{User.result.name.charAt(0).toUpperCase()}</Avatar></Link>
        <button onClick={Logout} className='nav-item nav-link'>Log out</button>
        <Link to="/notifications" className='nav-item nav-link noti-link'>
          <img src={notifLogo} alt='notification logo' className='noti'/>
        </Link>
        <div class='noti-num'>{c}</div>
        </>
        }
      </div>
    </nav>
  )
}

export default Navbar