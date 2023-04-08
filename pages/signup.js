import Link from "next/link";
import Nav from "../components/nav";
import style from '../styles/login.module.css'
import openImage from '../asserts/open.png';
import Image from "next/image";

export default function Signup() {
  

    return (
      <div >
        <div className={style.container}>
            <div className={style.login}>
                <h1>SIGNUP</h1>
                <hr className={style.line}/>
                <div className={style.input}>
                <input placeholder="Registration ID"/><br/>
                <input placeholder="email@gitam.in"/><br/>
                <div className={style.passwordInput}>
                <input placeholder="password"/><br/>
                <Image src={openImage} alt="Open" width={20} height={20} />
         </div>
         </div>
         <div className={style.button}>
            <button>REGISTER</button>
            <p>Alrady a user? </p>
            <Link href="./login">LOGIN</Link>
         </div>
        </div>
      </div>
      </div>
        
    )
  }
  
