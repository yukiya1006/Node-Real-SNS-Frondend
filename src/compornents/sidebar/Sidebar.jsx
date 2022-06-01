import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material'
import React from 'react'
import CloseFriend from '../closeFriend/CloseFriend'
import './Sidebar.css'
import {Users} from '../../dummyDate';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className='sidebarListItems'>
            <Home className='sidebarIcon'/>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
              <span className='sidebarListItemText'>Home</span>
            </Link>
          </li>
          <li className='sidebarListItems'>
            <Search className='sidebarIcon'/>
            <span className='sidebarListItemText'>Search</span>
          </li>
          <li className='sidebarListItems'>
            <Notifications className='sidebarIcon'/>
            <span className='sidebarListItemText'>Notifictions</span>
          </li>
          <li className='sidebarListItems'>
            <MessageRounded className='sidebarIcon'/>
            <span className='sidebarListItemText'>Message</span>
          </li>
          <li className='sidebarListItems'>
            <Bookmark className='sidebarIcon'/>
            <span className='sidebarListItemText'>Bookmark</span>
          </li>
          <li className='sidebarListItems'>
            <Person className='sidebarIcon'/>
            <Link to="/profile/mike" style={{textDecoration: "none", color: "black"}}>
              <span className='sidebarListItemText'>Profile</span>
            </Link>
          </li>
          <li className='sidebarListItems'>
            <Settings className='sidebarIcon'/>
            <span className='sidebarListItemText'>Setting</span>
          </li>
        </ul>
        <hr className='sidebarHr'/>
        <ul className='sidebarFriendLists'>
          {Users.map((user) => (
            <CloseFriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
