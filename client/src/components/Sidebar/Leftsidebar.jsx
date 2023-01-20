import React from 'react'
import './Leftsidebar.css'
import {NavLink} from 'react-router-dom'
import globe from '../../assets/globe.jpg'

const Leftsidebar = () => {
  return (
    <div className='left-div'>
        <nav className='left-nav'>
            <NavLink to='/' className='left-link' activeClassName='active'>
                <p>Home</p>
            </NavLink>
            <div className='left-nav-div'>
                <div><p>PUBLIC</p></div>
                <NavLink to='/Questions' className='left-link' activeClassName='active'>
                    <img src={globe} alt="globe" className='img-globe' />
                    <p style={{paddingLeft:'10px'}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className='left-link' activeClassName='active' style={{paddingLeft:'40px'}}>
                    <p>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='left-link' activeClassName='active' style={{paddingLeft:'40px'}}>
                    <p>Users</p>
                </NavLink>
            </div>
            <NavLink to='/Community' className='left-link' activeClassName='active'>
                <p>Community</p>
            </NavLink>
        </nav>
    </div>
  )
}

export default Leftsidebar