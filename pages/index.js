import home from "../asserts/Home.png" 
import  Login from './login.js'
import Styles from '../styles/Home.module.css'
import Nav from "../components/nav"
import Link from "next/link"
import Style from '../styles/index.module.css'
import { useCookies } from "react-cookie"
import { useEffect, useState } from "react"
export default function Home() {
  const [get, getCookie] = useCookies()
  const [data, setData] = useState({})
  const [auth, setAuth ] = useState(false)
  // useEffect(()=>{
  //   if(get['user']!=null || get['user']!=undefined || get['user']!='undefined') 
  //   {setData(get['user']);
  //     document.getElementById("welcome").innerHTML = "Welcome "+ (data.name);
  //   }
  //   else document.getElementById("welcome").innerHTML = "get your passes for up coming event by yourself";
  // },[data])
  
  
  return (
    <div className={Style.land}>
      <div className={Style.container}>
      <div className={Style.head}>
        <h1>"IT'S FOR YOU"</h1>
        <h2 id = {"welcome"}></h2>
      </div>
      <div className={Style.login}>
      <button className={Style.b1}><Link href="./login">Login</Link></button>
      <button className={Style.b2}><Link href="./signup">Signup</Link></button>
      </div>
      </div>
   </div>
      )
}
