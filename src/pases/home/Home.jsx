import React from 'react'
import './Home.css';
import Rightbar from '../../compornents/rightbar/Rightbar';
import Sidebar from '../../compornents/sidebar/Sidebar';
import Timeline from '../../compornents/timeline/Timeline';
import Topbar from '../../compornents/topbar/Topbar';

export default function Home() {
  return (
    <>
    <Topbar />
    <div className='homeContainer'>
      <Sidebar />
      <Timeline />
      <Rightbar />
    </div>
    </>
  );
}

