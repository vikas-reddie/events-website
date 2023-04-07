import Image from 'next/image';
import Nav from "../components/nav";
import style from '../styles/login.module.css';
import openImage from '../components/open.png';

export default function Login() {
  return (
    <div >
      <Nav />
      <div className={style.container}>
        <div className={style.login}>
          <h1>LOGIN</h1>
          <hr className={style.line}/>
          <div className={style.input}>
            <input placeholder="email@gitam.in"/><br/>
            <div className={style.passwordInput}>
              <input placeholder="password"/><br/>
              <Image src={openImage} alt="Open" width={20} height={20} />
            </div>
          </div>
          <div className={style.button}>
            <button>login</button>
            <p>New here?</p>
            <a>signup</a>
          </div>
        </div>
      </div>
    </div>
  )
}
