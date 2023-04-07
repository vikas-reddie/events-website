import Link from "next/link";
import Nav from "../components/nav"
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
        <div>
            <Nav />
            {events.map((item,value)=>{
            return(
                <div>
                    
                    <p1>{item.name}</p1><br/>
                    <p1>{item.date}</p1><br/>
                    <p1>{item.time}</p1><br/>
                    <p1>{item.place}</p1><br/>
                    <br/>
                </div>
            )
        })}

        </div>
    )
}