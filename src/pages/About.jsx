import Img1 from '../assets/imgs/restaurant-interior.jpg'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import OpeningHours from '../components/OpeningHours'
import Location from '../components/Location'
import './about.css'
import S1 from "../assets/imgs/staffone.jpg"
import S2 from "../assets/imgs/stafftwo.jpg"
import S3 from "../assets/imgs/staffthree.jpg"
import S4 from "../assets/imgs/stafffour.jpg"
const About = () =>{
    return(
        <>
        <NavBar/>
  	
  	<div class="container">
  		
  		<h2>History</h2>
  		
  		<div class="column2">
  			
  			<p class="bodyText">Taste of India restaurant began on April 26th, 2002 in the city of Dublin, Ireland. Focusing on the goals of “Quality, Healthy, and Tradition” the company is family operation making each dish in our own kitchens from scratch. Taste of India Restaurant has three generations of family member working together to fulfill the idea “Honor the Customer, Quality Comes First”. Through hard work and dedication, Taste of India Restaurant began building its brand around the idea of delicious and authentic traditional Indian food.</p>
  			
  		</div>
  		
  		
  		<div class="column2">
  			
  			<p class="bodyText">To remain true to our customers, we have forgone the use of a centralized kitchen like many restaurants we see that prepares semi-ready foods only to be heated up and served to their customers. We honor the customers by providing them with the freshest, most delicious, and authentic meal experience possible.</p>
  			
  		</div>
  		
  		
  		<img src={Img1}/>
  		
  		</div>

          <div className='container'>
  	
  	<h2>Staff</h2>
        <div className='contents'>
  		<div class="boxes-about ">
  		  <img class="col-4-img" alt="staff member" src={S1}/>
  			<h3>Restaurant Manager</h3>
  			<p class="newid">Harsh Mandal</p>
  			
  		</div>
  		
  		<div class="boxes-about">
  		  <img class="col-4-img" alt="staff member" src={S2}/>
  			<h3>Head Chef</h3>
  			<p class="newid">Bharat Dara</p>
  			
  		</div>
  		
  		<div class="boxes-about">
  		  <img class="col-4-img" alt="staff member" src={S3}/>
  			<h3>Sous Chef</h3>
  			<p class="newid">Sumit Bajaj</p>
  		
  		</div>
  		
  		<div class="boxes-about">
  		  <img class="col-4-img" alt="staff member" src={S4}/>
  			<h3>Host</h3>
  			<p class="newid">Chandan Som</p>
  		
  		</div>
  		</div>
  		</div>
  		<Location/>
        <OpeningHours/>
        <Footer/>

        </>
    )
}
export default About;