import React from 'react'
import Leftsidebar from '../../components/Sidebar/Leftsidebar'
import { useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeFrnd } from '../../actions/users'
import './UserFrnd.css'

const UserFrnd = () => {
    const frnds = useSelector(state=>state.frndListReducer)[0]
    const currentUser = useSelector((state)=>state.currentUserReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleFrnd=(i)=>{
        // const ind = frnds.names.findIndex(ele=>ele===x)
        const userId = frnds.frnd[i]
        navigate(`/User/${userId}`)
    }
    const handleRemove=(i)=>{
        // const i = frnds.names.getIndex(x)
        dispatch(removeFrnd(currentUser?.result._id,frnds.frnd[i]))
        window.location.reload()
    }

  return (
    <div className='home-div1'>
        <Leftsidebar/>
        <div className='home-div2 display-frnds'>
            { frnds?.names?.length>0 ?(
                frnds?.names?.map((x,index)=>(
                    <div key={x}>
                        <button className='frnd-name' onClick={()=>handleFrnd(index)}>{x}</button>
                        <button className='frnd-remove' onClick={()=>handleRemove(index)}>Remove</button>
                    </div>
                ))):(
                    <>
                    <h3 style={{fontWeight:'400'}}>Follow Accounts to have Friends</h3>
                    <button className='frnd-remove' onClick={()=>navigate('/Users')}>Search</button>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default UserFrnd