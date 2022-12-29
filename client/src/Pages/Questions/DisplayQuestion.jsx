import React from 'react'
import Leftsidebar from '../../components/Sidebar/Leftsidebar'
import Rightsidebar from '../../components/Sidebar/Rightsidebar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  return (
    <div className='home-div1'>
      <Leftsidebar />
      <div className='home-div2'>
        <QuestionDetails/>
        <Rightsidebar />
      </div>
    </div>
  )
}

export default DisplayQuestion