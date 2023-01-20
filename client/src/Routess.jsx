import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import Plans from './Pages/AskQuestion/Plans'
import Community from './Pages/Community/Community'
import Post from './Pages/UserProfile/Post'
import PostDesc from './Pages/Community/PostDesc'
import UserFrnd from './Pages/Users/UserFrnd'
import Notification from './components/Navbar/notification'
import Home1 from './Pages/AskQuestion/Home1'
import Home2 from './Pages/AskQuestion/Home2'
import SharePost from './Pages/Community/SharePost'

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Auth" element={<Auth/>}/>
      <Route path="/Questions" element={<Questions/>}/>
      <Route path="/AskQuestion" element={<AskQuestion/>}/>
      <Route path="/Questions/:id" element={<DisplayQuestion/>}/>
      <Route path="/Tags" element={<Tags/>}/>
      <Route path="/Users" element={<Users/>}/>
      <Route path="/User/:id" element={<UserProfile/>} />
      <Route path="/plan" element={<Plans/>} />
      <Route path='/Community' element={<Community/>} />
      <Route path='/Post' element={<Post/>} />
      <Route path='/Post/:id' element={<PostDesc/>} />
      <Route path='/share/Post/:id' element={<SharePost/>} />
      <Route path='/user/frnds' element={<UserFrnd/>} />
      <Route path='/notifications' element={<Notification/>} />
      <Route path='/Home1' element={<Home1/>} />
      <Route path='/Home2' element={<Home2/>} />
    </Routes>
  )
}

export default Routess