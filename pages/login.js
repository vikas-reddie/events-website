import Image from 'next/image';
import Nav from "../components/nav";
import style from '../styles/login.module.css';
import openImage from '../asserts/open.png';
import closeImage from '../asserts/close.png'
import Link from 'next/link';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router";

export default function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [cookies, setCookie] = useCookies()
  const router = useRouter()
  const show = () => {
    setShowPassword(!showPassword);
  }
  const submithand = (e)=>{
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem(email));
      console.log(localStorage.getItem(email))
    // if(JSON.parse(localStorage.getItem(email))!=null || JSON.parse(localStorage.getItem(email))!='undefined' || JSON.parse(localStorage.getItem(email))!= undefined) 
    // {
    //   setUser(JSON.parse(localStorage.getItem(email)))    
      
    if (user.email === email && user.password === password) {
      console.log('Authentication successful');
      router.push("/campus");
      setCookie("user", user);
      setCookie("Auth", true);
    } else {
      alert('Authentication failed');
    }
    
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
              <input placeholder="password" name='password' type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=> setPassword(e.target.value)}  required />
              <Image src={showPassword ? closeImage : openImage} alt="Open" width={20} height={20} onClick={show} />
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
