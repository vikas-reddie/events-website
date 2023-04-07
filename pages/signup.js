import Link from "next/link";
import Nav from "../components/nav";
import style from '../styles/login.module.css'

export default function Signup() {
  

    return (
      <div >
        <Nav />
        <div className={style.container}>
        <div className={style.login}>
        <h1>SIGNUP</h1>
        </div>
         <div className={style.input}>
         <input placeholder="Registration ID"/><br/>
          <input placeholder="email@gitam.in"/><br/>
          <input placeholder="password"/><br/>
         </div>
         <div className={style.button}>
            <button>REGISTER</button>
            <p>Alrady a user? </p>
            <Link href="./signup">LOGIN</Link>
         </div>
        </div>
      </div>
        
    )
  }
  