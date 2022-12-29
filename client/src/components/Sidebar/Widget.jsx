import React from 'react'
import './Rightsidebar.css'
import comment from '../../assets/cmt.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blackLogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='14'/>
            <p>How to make time for learning in tech<br/>
                sponsored post</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='14'/>
            <p>Ready to optimize your JavaScript with Rust?</p>
        </div>
        </div>

        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <img src={comment} alt="comment" width='14'/>
            <p>Help us identify new roles for community
            members</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={comment} alt="comment" width='14'/>
            <p>Navigation and UI research starting soon</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={blackLogo} alt="StackOverflow Logo" width='14'/>
            <p>Temporary policy: ChatGPT is banned</p>
        </div>
        </div>

        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <p>7</p>
            <p>Amazon Collective launch and tag<br/>
            discussion</p>
        </div>
        <div className='right-sidebar-div-2'>
            <p>17</p>
            <p>How to reference material written by <br/>others - clarification</p>
        </div>
        <div className='right-sidebar-div-2'>
            <p>28</p>
            <p>Staging Ground Workflow: Canned <br/>Comments - Revised</p>
        </div>
        </div>
    </div>
  )
}

export default Widget