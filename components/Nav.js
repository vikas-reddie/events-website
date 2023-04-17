import { useCookies } from "react-cookie";
import Link from "next/link";
import styles from '../styles/nav.module.css'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Nav() {
  const [cookies, setCookie, removeCookie] = useCookies(['Auth']);
  const [loggedIn, setLoggedIn] = useState(false);
  const router =useRouter()

  useEffect(() => {
    if (cookies['Auth']) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [cookies]);


  const handleLogout = () => {
    removeCookie("Auth");
    removeCookie('user');
    router.push('/')
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.head}>
        <Link href={"/"}>
          IT'S FOR YOU
        </Link>
      </div>
      <div className={styles.page}>
        <Link href="./campus">
          Campus
        </Link>
        <Link href="./Events">
          Events
        </Link>
        <Link href="./Blog">
          Blog
        </Link>
        <Link href="./Support">
          Support
        </Link>
      </div>
      <div className={styles.user}>
        {loggedIn ? (
          
          <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
        ) : (
          <>
            <Link href="./login">Login</Link>
            <Link href="./signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}


