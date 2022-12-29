import React from 'react'
import '../../App.css'
import Leftsidebar from '../../components/Sidebar/Leftsidebar'
import Rightsidebar from '../../components/Sidebar/Rightsidebar'
import Homemainbar from '../../components/Sidebar/Homemainbar'

const Home = () => {
  return (
    <div className='home-div1'>
      <Leftsidebar />
      <div className='home-div2'>
        <Homemainbar />
        <Rightsidebar />
      </div>
    </div>
  )
}

export default Home