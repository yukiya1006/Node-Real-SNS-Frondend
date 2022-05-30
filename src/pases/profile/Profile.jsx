import React from 'react'
import Rightbar from '../../compornents/rightbar/Rightbar';
import Sidebar from '../../compornents/sidebar/Sidebar';
import Timeline from '../../compornents/timeline/Timeline';
import Topbar from '../../compornents/topbar/Topbar';
import './Profile.css';

export default function Profile() {
  return (
    <>
    <Topbar />
    <div className='profile'>
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img src="aseets/post/3.jpeg" alt="" className='profileCoverImg'/>
            <img src="aseets/person/1.jpg" alt="" className='profileUserImg'/>
          </div>
          <div className="profileInfo">
            <h4 className='profileInfoName'>Mike</h4>
            <span className='profileInfoDesc'>トレーナーをしています</span>
          </div>
        </div>
        <div className="rofileRightBottom">
          <Timeline />
          <Rightbar profile />
        </div>
      </div>
    </div>
    </>
  )
}
