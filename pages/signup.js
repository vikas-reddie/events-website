import Link from "next/link";
import Nav from "../components/nav";
import style from '../styles/login.module.css'
import openImage from '../asserts/open.png';
import closeImage from '../asserts/close.png'
import Image from "next/image";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router";

export default function Signup() {
    const [registration,setRegistration]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [name,setName]=useState('')
    const router =useRouter()
    const show = () => {
      setShowPassword(!showPassword);
    }
    const submithand = (e)=>{
        e.preventDefault();
        const user ={
            "email":email,
            "password":password,
            "registration":registration,
            "name":name
        }
        localStorage.setItem(email, JSON.stringify(user));
        router.push('/login');
        }
    return (
      <div className={style.land}  >
        <div className={style.container}>
            <div className={style.login}>
                <h1>SIGNUP</h1>
                <hr className={style.line}/>
                <div className={style.input}>
                <input type="text" placeholder="Name"  name='Name' value={name} onChange={(e)=> setName(e.target.value)}  required/><br/>
                <input type="text" placeholder="Registration ID"  name='registration' value={registration} onChange={(e)=> setRegistration(e.target.value)}  required/><br/>
                <input  type="email" placeholder="email@gitam.in"  name='email' value={email} onChange={(e)=> setEmail(e.target.value)}  required /><br/>
                <div className={style.passwordInput}>
                <input type={showPassword ? 'text' : 'password'} placeholder="password"  name='password' value={password} onChange={(e)=> setPassword(e.target.value)}  required /><br/>
                <Image src={showPassword ? closeImage : openImage} alt="Open" width={20} height={20}  onClick={show}/>
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
  
