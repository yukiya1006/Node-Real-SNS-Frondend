import React, { useRef } from 'react';
import './Login.css';

export default function Login() {
  const email = useRef();
  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.group(email.current.value);

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
             <div className="loginMsg">ログインはこちら</div>
             <input type="email" className='loginInput' placeholder='email' required ref={email}/>
             <input type="password" className='loginInput' placeholder='password' required minLength="6"/>
             <button className='loginButton'>ログイン</button>
             <span className='loginForget'>パスワードを忘れた方はこちら</span>
             <button className="loginRegisterButton">アカウント作成</button>
           </form>
         </div>
       </div>
    </div>
  )
}
