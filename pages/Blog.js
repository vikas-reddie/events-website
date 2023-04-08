import Link from "next/link";
import Nav from "../components/nav";
import image1 from "../asserts/blog.jpg"
import Image from "next/image";
import Style from '../styles/Blog.module.css'
export default function Blog()
{
    return(
        <div>
            <Nav/>
            <div className={Style.head}>
            <h3>Get Your Tickets with</h3>
            <h1>IT'S FOR YOU </h1>
            <h2>Easy To Buying The tickets for our events</h2>
            <Image src={image1}/>
            <p1>With the festive season coming soon, many events (big and small; formal and informal) are right around the corner. It may include concerts, music fests, backstage tours, corporate parties, etc. And if you’re reading this article, you’re probably planning to buy the tickets for the event. It could be with friends or even for you, you no need to stand in line and wait for your turn, the wait is over get your tickets for the events where ever you are[...]</p1>
        </div>

        </div>
    )
}