import Link from "next/link";
import Nav from "../components/nav";


export default function Support()
{
    return(
        <div>
           <h1>IT'S FOR YOU</h1> 
           <h3>Need help? Reach us out </h3>
           <h2>FAQ's</h2>
           <div>
            <Link href="#">HOW TO BOOK TICKETS?</Link><br/>
            <Link href="#">WHO CAN BOOK TCKETS?</Link>
           </div>
           <div>
                <h1>Chat with Us</h1>
                <h2>Chat with our support team to get instant help</h2>
                <h3>Use this option to quickly chat with one of our executives</h3>
                <h3>Our Support Hours</h3>
                <p1>Monday 12:30am ET to Saturday 1:30am ET</p1><br/>
                <p1>Monday 4:30am UTC to Saturday 5:30am UTC</p1><br/>
                <p1>Monday 10:00am IST to Saturday 11:00am IST</p1>
                <h1>Support ?</h1>
                <p1>Click on the icon on the lower right corner of the screen to start chat.
                    Alternatively, click on the WhatsApp button if you prefer chatting on Whatsapp</p1>
            </div>
            <div>
                <h1>Contact</h1>
                <button>9874563210</button>
                <button>itsforyou@gmail.com</button>
                <button>@its_for_you</button>
            </div>
        </div>
    )
}