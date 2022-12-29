import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import setCurrentUser from '../../actions/currentUser'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'

const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  var User = useSelector((state)=>(state.currentUserReducer))
  
  useEffect(()=>{
    const token = User?.token
    if(token){
      const decodeToken = decode(token)
      if(decodeToken.exp * 1000 < new Date().getTime()){
        Logout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])

  const Logout = () =>{
    dispatch({type:'LOGOUT'})
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to="/" className='nav-item nav-logo'>
          <img src={logo} alt='logo' className='sof-img'/>
        </Link>
        <Link to="/" className='nav-item nav-btn'>About</Link>
        <Link to="/" className='nav-item nav-btn'>Products</Link>
        <Link to="/" className='nav-item nav-btn'>For Teams</Link>
        <form>
          <input type="text" placeholder="Search..."></input>
          <img src={search} alt='search' className='search-img'/>
        </form>
        {User === null ? 
        <Link to="/Auth" className='nav-item nav-link'>Log in</Link> :
        <>
        <Link to={`/User/${User?.result?._id}`} style={{textDecoration:"none"}}><Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white">{User.result.name.charAt(0).toUpperCase()}</Avatar></Link>
        <button onClick={Logout} className='nav-item nav-link'>Log out</button>
        </>
        }
      </div>
    </nav>
  )
}

export default Navbar