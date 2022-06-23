import { MailOutline } from "@material-ui/icons"
import "./contact.css"


export default function Contact() {
  return (
    <div className='contact' id="contact">
        <div className='contactWrapper'>
            <div className="contactHeading">Have Some Question ?</div>
            <div className="contactForm">
                <div className="contactFormLeft">
                    <img src="/assets/contact/mailIcon.png"/>
                </div>
                <div className="contactFormRight">
                    <form> 
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <input type="text" placeholder="What's Your Email? Name"/>
                        <textarea placeholder="Your Question..."/>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  ) 
}
