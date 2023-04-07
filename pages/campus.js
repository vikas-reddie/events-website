import Nav from "../components/nav";
import Image from "next/image";
import image from "./Home.png"

export default function Campus() {
    const clgs = [
        {
          name: 'BENGALURU',
          url: './Home',
        },
        {
          name: 'hyderabad',
          url: '',
        },
        {
          name: 'VIZAG',
          url: '',
        },
        {
            name: 'VIZAG(GIMSR)',
            url: '',
        }
      ];
  

    return (
      <div >
       <Nav/>
        {clgs.map((item,value)=>{
            return(
                <div>
                    <Image src={image}/>
                    <p1>{item.name}</p1>
                </div>
            )
        })}
          

      </div>
        
    )
  }
  