import { Chat, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import "./Topbar.css";
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none"}}>
         <span className="logo">Real SNS</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className='searchIcon'/>
          <input type="text" className='searchInput' placeholder='探し物は何ですか？' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">2</span>
          </div>
          <img src="/aseets/person/1.jpg" alt="" className='topbarImg'/>
        </div>
      </div>
    </div>
  )
}
