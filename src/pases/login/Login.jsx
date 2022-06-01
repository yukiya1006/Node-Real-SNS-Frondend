import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className='login'>
       <div className="loginWrapper">
         <div className="loginLeft">
           <h3 className='loginTitle'>Real SNS</h3>
           <span className="loginDesc">MERNで本格的なSNSを。</span>
         </div>
         <div className="loginRight">
           <div className="loginBox">
             <div className="loginMsg">ログインはこちらから</div>
             <input type="text" className='loginInput' placeholder='Emeal'/>
             <input type="text" className='loginInput' placeholder='password'/>
             <button className='loginButton'>ログイン</button>
             <span className='loginForget'>パスワードを忘れた方へ</span>
             <button className="loginRegisterButton">アカウント作成</button>
           </div>
         </div>
       </div>
    </div>
  )
}
