import React, { useContext, useRef } from 'react';
import './Login.css';
import { AuthContext } from "../../state/AuthContext";
import { loginCall } from "../../dispatchCall";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className='login'>
       <div className="loginWrapper">
         <div className="loginLeft">
           <h3 className='loginTitle'>Real SNS</h3>
           <span className="loginDesc">MERNで本格的なSNSを。</span>
         </div>
         <div className="loginRight">
           <form className="loginBox" onSubmit={(e) => handleClick(e)}>
             <div className="loginMsg">ログインはこちら</div>
             <input type="email" className='loginInput' placeholder='email' required ref={email}/>
             <input type="password" className='loginInput' placeholder='password' required minLength="6" ref={password}/>
             <button className='loginButton'>ログイン</button>
             <span className='loginForget'>パスワードを忘れた方はこちら</span>
             <button className="loginRegisterButton">アカウント作成</button>
           </form>
         </div>
       </div>
    </div>
  )
}
