import Link from "next/link";
import styles from '../styles/nav.module.css'
export default function Nav()
{
    return(
        <nav className={styles.nav}>
        <div className={styles.head}>
            <Link href={"/"}><h>IT'S FOR YOU</h></Link>
        </div>
        <div className={styles.page}>
            <Link href="./campus">Campus</Link>
            <Link href="./Events">Events</Link>
            <Link href="./Blog">Blog</Link>
            <Link href="./Support">Support</Link>
        </div>
        <div className={styles.user}>
        <Link href="./login">Login</Link>
        <Link href="./signup">Signup</Link>
        </div>

      </nav>
    )
}