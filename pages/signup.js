import Link from "next/link";
import Nav from "../components/nav";
import style from '../styles/login.module.css'
import openImage from '../asserts/open.png';
import Image from "next/image";
import { useState } from "react";

export default function Signup() {
    const [registration,setRegistration]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const submithand = (e)=>{
        e.preventDefault();
        const value ={
            "email":email,
            "password":password,
            "registration":registration

          }
          localStorage.setItem(email,JSON.stringify(value));

        
        
    }
    return (
      <div className={style.land}  >
        <div className={style.container}>
            <div className={style.login}>
                <h1>SIGNUP</h1>
                <hr className={style.line}/>
                <div className={style.input}>
                <input type="text" placeholder="Registration ID"  name='registration' value={registration} onChange={(e)=> setRegistration(e.target.value)}  required/><br/>
                <input  type="email" placeholder="email@gitam.in"  name='email' value={email} onChange={(e)=> setEmail(e.target.value)}  required /><br/>
                <div className={style.passwordInput}>
                <input type="password" placeholder="password"  name='password' value={password} onChange={(e)=> setPassword(e.target.value)}  required /><br/>
                <Image src={openImage} alt="Open" width={20} height={20} />
         </div>
         </div>
         <div className={style.button}>
            <button type="submit" onClick={submithand}>REGISTER</button>
            <p>Alrady a user? </p>
            <Link href="./login">LOGIN</Link>
         </div>
        </div>
      </div>
      </div>
        
    )
  }
  
