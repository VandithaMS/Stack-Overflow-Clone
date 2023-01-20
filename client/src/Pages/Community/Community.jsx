import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Leftsidebar from '../../components/Sidebar/Leftsidebar'
import { allPost } from '../../actions/Post'
import Abc from './abc'

const Community = () => {

  const dispatch = useDispatch()
  const navigate =useNavigate()
  const user = useSelector(state=>state.currentUserReducer)
  // console.log(user?.result?._id)
  // dispatch(allPost(user?.result?._id))
  useEffect(() => {
    dispatch(allPost(user?.result?._id))
  }, [dispatch])
  const l = useSelector(state=>state.allPostReducer)
  const list = l?.data
  var newList = []
  if(list){
    list.forEach(element => {
      newList.push(element)
    });
    console.log(newList)
  }

  return (
    <div>
        <div className='home-div1'>
            <Leftsidebar/>
            <div className='home-div2'>
              {
                !user && <div style={{marginTop:'80px'}}>Login to see posts...</div>
              }
              { newList ? (
                (
                  newList.map((p)=>(
                    <Abc post={p} />
                  ))
                )):(
                  <>
                <h3 style={{fontWeight:'400', marginTop:'70px'}}>Follow Accounts to see post</h3>
                <button className='frnd-remove' onClick={()=>navigate('/Users')}>Search</button>
              </>
                )
              }
            </div>
        </div>
    </div>
  )
}

export default Community