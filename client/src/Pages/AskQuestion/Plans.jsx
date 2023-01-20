import React from 'react'
import './Plans.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import askQuestion from '../../actions/question'
// import {addPlan} from '../../actions/plan'

const Plans = () => {
    const location = useLocation()
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const User = useSelector(state=>state.currentUserReducer)
    const Num = useSelector(state=>state.planReducer)

    const handlePlan=(p)=>{
        if(p===0){
            if(Num===0){
                dispatch(askQuestion(location.state,navigate))
            }else{
                alert("Maximum limit to ask question is reached...")
            }
        }else {
            if(p === 1){
                navigate('/Home1')
            }else if(p===2){
                navigate('/Home2')
            }
        }
    }

  return (
    <div className='plan'>
    <div className='home-div1 plan-div'>
    <div className='plan-1'>
        <h2>Free Plan</h2>
        <p>Free plan can post only one<br/> question a day</p>
        <button className='plan-btn' onClick={()=>handlePlan(0)} type='submit'>Free Plan</button>
    </div>
    <div className='plan-2'>
        <h2>Silver Plan</h2>
        <p>Pay Rs.100 per month and post 5<br/> questions a day</p>
        <button className='plan-btn' onClick={()=>handlePlan(1)} type='submit'>Silver Plan</button>
    </div>
    <div className='plan-3'>
        <h2>Gold Plan</h2>
        <p>Pay Rs.1000 per month and post<br/> unlimited questions a day</p>
        <button className='plan-btn' onClick={()=>handlePlan(2)} type='submit'>Gold Plan</button><br/>
        <button className='plan-cancel-btn' onClick={()=>navigate(-1)} style={{textDecoration:"none", color:'#009dff'}} type='submit'>Cancel</button>
    </div>
    </div>
</div>
  )
}

export default Plans
