import NavBar from "../components/NavBar";
import OpeningHours from "../components/OpeningHours";
import Footer from "../components/Footer";
import './contact.css'
const Contact = () =>{
    return(
        <>
        <NavBar/>
        

        <div id='contact-container' className="container">
            <div className="contact-top">
        <h2>Have Any Questions?</h2>
        <p id="contact-text">Let us help you with your queries. Please fill the below form to help us assist you better with your queries.</p>
            <h2>Drop us a line</h2>
            </div>
            <div id='contact-form' className="contents">
                <span>Please enter your details below</span>
                <label for='name'>Name:</label>
                <input name="name" type="text" placeholder="Enter your name"/>
                <label for='email'>Email:</label>
                <input name="email" type="email" placeholder="example@example.com"/>
                <label for='telephone'>Number:</label>
                <input name="telephone" type="telephone" placeholder="xxx-xxx-xxxx"/>
                <label for='comments'>Comments:</label>
               
                <textarea name="comments" placeholder="Enter your comments..."></textarea>
                <input name="submit" type="submit"/>
                
            </div>
        </div>
        <OpeningHours/>
        <Footer/>
        </>
    )
}
export default Contact;