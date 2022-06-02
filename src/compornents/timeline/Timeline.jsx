import React, {useState, useEffect} from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './Timeline.css';
// import { Posts } from '../../dummyDate'
import axios from "axios";


export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async ()=> {
      const responce = username ? await axios.get(`/posts/profile/${username}`) : await axios.get("/posts/timeline/62922c02594fa111a4d33cfe");
      setPosts(responce.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share/>
        {posts.map((post) => (
          <Post post={post} key={post._id}/>
        ))}
      </div>
    </div>
  )
}
