import Link from "next/link";
import styles from "../styles/Events.module.css"
import Nav from "../components/nav"
import Image from "next/image";
import img from "../asserts/poster.jpg"

import line from "../asserts/Dotted-line.png"
export default function Events()
{
    const events = [
        {
          name: 'FRIGHT NIGHT RAVE',
          url: './Home',
          date:'OCTOBER 31 ',
          time:'6 PM TO 9 PM',
          place:'SIERRAILANE PARK'
        },
        {
            name: 'DUSSEHRA CULTURAL NIGHT',
            url: './Home',
            date:'MARCH 10  ',
            time:'3 PM TO 6 PM ',
            place:'IN FOOTBALL GROUND'
        },
        {
            name: 'ESPERANZA',
            url: './Home',
            date:'MARCH 18',
            time:'3 PM TO 6 PM ',
            place:'INFRONT OF NEW BOYS HOSTEL'
        }
      ];
    return(
        <div className={styles.eventscontainer}>
            <div className={styles.eventsdetails}>
                {events.map((item,value)=>{
                    return(
                        <div key={item.name} className={styles.eventcard}>


                            <Image  src={img}/>
                            <div className={styles.description}>
                                <h3>{item.name}</h3>
                                <p>{item.date}</p>
                                <p>{item.time}</p>
                                <p>{item.place}</p>
                            </div>
                            <Image src={line}/>
                            <div>
                                <h4 className={styles.buy}>BUY IT</h4>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}