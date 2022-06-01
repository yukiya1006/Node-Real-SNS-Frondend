import React from 'react'
import './Rightbar.css';
import {Users} from '../../dummyDate';
import Online from '../online/Online';

export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="aseets/star.png" alt="" className='starImg'/>
          <span className='eventText'><b>フォロワー限定</b>イベント開催中！</span>  
        </div>
        <img src="aseets/event.jpeg" alt="" className='eventImg'/>
        <h4 className='rightbarTitle'>オンライン中の友達</h4>
        <ul className="rightbarFriendList">
          { Users.map((user) => (
            <Online user={user} key={user.id}/>
          ))}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img src="aseets/promotion/promotion1.jpeg" alt="" className='rightbarPromotionImg'/>
        <p className='promotionName'>ショッピング</p>
        <img src="aseets/promotion/promotion2.jpeg" alt="" className='rightbarPromotionImg'/>
        <p className='promotionName'>カーショップ</p>
        <img src="aseets/promotion/promotion3.jpeg" alt="" className='rightbarPromotionImg'/>
        <p className='promotionName'>MERN株式会社</p>
      </>
    )
  }

  const ProfileRightbar = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <>
        <h4 className='rightbarTitle'>ユーザー情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarItem">
            <span className="rightbarInfoKey">出身:</span>
            <span className="rightbarInfoKey">アメリカ</span>
          </div>
          <h4 className="rightbarSubTitle">あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src={PUBLIC_FOLDER + "/person/2.jpg"} alt="" className='rightbarFollowingImg'/>
              <span className="rightbarFollowingName">cloe</span>
            </div>
            <div className="rightbarFollowing">
              <img src={PUBLIC_FOLDER + "/person/3.jpg"} alt="" className='rightbarFollowingImg'/>
              <span className="rightbarFollowingName">Edword</span>
            </div>
            <div className="rightbarFollowing">
              <img src={PUBLIC_FOLDER + "/person/4.jpg"} alt="" className='rightbarFollowingImg'/>
              <span className="rightbarFollowingName">Joe</span>
            </div>
            <div className="rightbarFollowing">
              <img src={PUBLIC_FOLDER + "/person/5.jpg"} alt="" className='rightbarFollowingImg'/>
              <span className="rightbarFollowingName">Lisa</span>
            </div>
          </div>
        </div>
      </>
    );
  };    

  return (
    <div className="rightbar">
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
} 

