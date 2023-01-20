import React from 'react'
import Leftsidebar from '../Sidebar/Leftsidebar'
import { useSelector, useDispatch } from 'react-redux'
import { addFrnd } from '../../actions/users'
import moment from 'moment'
import { getNotification } from '../../actions/users'

const Notification = () => {
  const user = useSelector((state)=>state.currentUserReducer)
  const dispatch = useDispatch()
  // console.log(user?.result?._id)
  
  const notif = useSelector(state=>state.getNotificationReducer)
  // console.log(notif)
  const handleAcc=(ind)=>{
    dispatch(addFrnd(user?.result?._id, notif?.data?.list[ind]))
    dispatch(getNotification(user?.result?._id))
    window.location.reload()
  }

  return (
    <div className='home-div1'>
        <Leftsidebar/>
        <div className='home-div2 not-div2'>
          <h3 style={{fontWeight:'400'}}>Requests</h3>
          {
            notif?.data?.names?.map((ele,index)=>(
              <>
              <button className='not-btn1' type='button'>
              <p>{ele}</p>
              <p style={{fontSize:'smaller', color:'gray'}}>{moment(notif?.data?.time[index]).fromNow()}</p>
            </button>
            <button className='not-btn2' onClick={()=>handleAcc(index)} type='button'>Accept</button>
              </>
            ))
          }
        </div>
    </div>
  )
}

export default Notification