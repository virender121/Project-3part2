import React from 'react'
import "./Home.css"
import Sidebar from '../../section/SideBar/SideBar'
// import Middle from '../../section/Middle/Middle'
import Feed from '../../section/Middle/Feed'
import Widgets from '../../section/Right/Right'

const Home = () => {
  return (
    <div className='Main'>
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  )
}

export default Home
