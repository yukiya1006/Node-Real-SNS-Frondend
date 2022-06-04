import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //パスワードと確認用パスワードが合っているか
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("パスワード違います");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        //registerAPIを叩く
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };


  return (
    <div className='login'>
       <div className="loginWrapper">
         <div className="loginLeft">
           <h3 className='loginTitle'>Real SNS</h3>
           <span className="loginDesc">MERNで本格的なSNSを。</span>
         </div>
         <div className="loginRight">
           <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
             <div className="loginMsg">新規登録はこちらから</div>
             <input type="text" className='loginInput' placeholder='ユーザー名' required ref={username}/>
             <input type="email" className='loginInput' placeholder='email' required ref={email}/>
             <input type="password" className='loginInput' placeholder='password' required minLength="6" ref={password}/>
             <input type="password" className='loginInput' placeholder='確認用パスワード' required minLength="6" ref={passwordConfirmation}/>
             <button type="submit" className='loginButton'>サインアップ</button>
             <button className="loginRegisterButton">ログイン</button>
           </form>
         </div>
       </div>
    </div>
  )
}
