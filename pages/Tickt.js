import Nav from "../components/nav";
import img from "../asserts/poster.jpg";
import style from '../styles/ticket.module.css';
import Image from 'next/image';
export default function Signup() {
    

    
    return (
      <div className={style.land}>
        
        <div className={style.content}>
            <div className={style.imageContainer}>
                <Image src={img}  width={50} height={50} className={style.image} />
            </div>
            <div className={style.data}>
            <h1>FRIGHT NIGHT RAVE</h1>
            <p>OCTOBER 31 | 6:00 PM TO 9:00 PM</p>
            <p>SIERRAILANE PARK</p>
            <p>Ticket Price:150/-</p>
            <p>DISCRIPTION OF EVENT:</p>
            <p>It is a 3 hour event "FRIGHT NIGHT RAVE" which is super exciting and makes you mad</p>
            </div>
        </div>
        <button>BUY NOW</button>
      </div>
        
    )
  }
  
