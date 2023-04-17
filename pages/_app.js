import Nav from '../components/nav'
import '../styles/globals.css'
import { useCookies } from 'react-cookie';

function MyApp({ Component, pageProps }) {
//   const [cookies, setCookie] = useCookies()
//  const auth = (cookies['user']!=null || cookies['user']!= 'undefined' || cookies['user']!= undefined)?true:false; 
//  console.log(auth)
  return (
      <>
      <Nav/>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
