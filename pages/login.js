import Image from 'next/image';
import Nav from "../components/nav";
import style from '../styles/login.module.css';
import openImage from '../asserts/open.png';
import closeImage from '../asserts/close.png'
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const submithand = (e)=>{
      e.preventDefault();
      const log={
        "email":email,
        "password":password
         }
    // const aauth=Auth(log);

  }
  return (
    <div className={style.land} >
      <div className={style.container}>
        <div className={style.login}>
          <h1>LOGIN</h1>
          <hr className={style.line}/>
          <div className={style.input}>
            <input placeholder="email@gitam.in" name='email' value={email} onChange={(e)=> setEmail(e.target.value)}  required/>
            <div className={style.passwordInput}>
              <input placeholder="password" name='password' value={password} onChange={(e)=> setPassword(e.target.value)}  required />
              <Image src={openImage} alt="Open" width={20} height={20} />
            </div>
          </div>
          <div className={style.button}>
            <button onClick={submithand}>login</button>
            <p>New here?</p>
            <Link href="./signup">SIGNUP</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
