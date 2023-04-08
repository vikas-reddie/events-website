import Link from "next/link";
import Nav from "../components/nav";
import Style from '../styles/support.module.css'

export default function Support() {
  return (
    <div>
      <Nav />
      <div className={Style.content}>
        <div className={Style.head}>
          <h1>IT'S FOR YOU</h1>
          <h3>Need help? Reach us out</h3>
        </div>
        <div className={Style.faq}>
          <h2>FAQ's</h2>
          <div className={Style.linkContainer}>
            <Link href="#" className={Style.link}>HOW TO BOOK TICKETS?</Link>
            <Link href="#" className={Style.link}>WHO CAN BOOK TICKETS?</Link>
          </div>
        </div>
        <div className={Style.chat}>
          <h1>Chat with Us</h1>
          <h2>Chat with our support team to get instant help</h2>
          <h3>Use this option to quickly chat with one of our executives</h3>
          <h3>Our Support Hours</h3>
          <p>Monday 12:30am ET to Saturday 1:30am ET</p>
          <p>Monday 4:30am UTC to Saturday 5:30am UTC</p>
          <p>Monday 10:00am IST to Saturday 11:00am IST</p>
          <h1>Support ?</h1>
          <p>Click on the icon on the lower right corner of the screen to start chat.
            Alternatively, click on the WhatsApp button if you prefer chatting on Whatsapp</p>
            <hr />
        </div>
        <hr />
        <div className={Style.contact}>
          <h1>Contact</h1>
          <div className={Style.buttonContainer}>
            <button>9874563210</button>
            <button>itsforyou@gmail.com</button>
            <button>@its_for_you</button>
          </div>
        </div>
      </div>
    </div>
  )
}
