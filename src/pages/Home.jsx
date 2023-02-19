import NavBar from '../components/NavBar'
import cont1 from '../assets/imgs/menu.jpg'
import cont2 from '../assets/imgs/table.jpg'
import cont3 from '../assets/imgs/deals.jpg'
import {Link } from 'react-router-dom'
import './home.css'
import Location from '../components/Location'
import OpeningHours from '../components/OpeningHours'
import Footer from '../components/Footer'
const Home = () =>{
    return(
        <>
        <NavBar/>

  	    <div id ='home-container' className="container">
  		
  		<h2>The Best Indian Dishes in Dublin</h2>

  		<div className='contents'>

  		<div className="boxes">
  			<h3><Link to='/menu'>View Our Menu</Link></h3>
  			<p className="bodyText">Our menu consists of authentic Indian cuisine with recipes straight from home. Check it out for exciting dishes like Paneer 65, Harabhara Kebab, and deserts like Lachha Rabdi, Rasgulla and more all home made.</p>
            <div>
            <Link to='/menu'><img className="home-images" src={cont1} alt=""/></Link>
            </div>
  		</div>
  		
  		<div className="boxes">
            <h3><Link to='/menu'>Book a Table</Link></h3>
  			<p className="bodyText">You can reserve a table for yourself of for a party at our restaurant. We provide online booking service to ensure our customers can easily book tables from their comfort of their homes.</p>
            <div>
            <Link to='/contact'><img className="home-images" src={cont2} alt=""/></Link>
            </div>
		</div>
  		
  		<div className="boxes">
            <h3><Link to='/menu'>See Our Deals</Link></h3>
  			<p className="bodyText">Check out our Taste of India specials which include meals and combos to save your money on dishes. They include Veg Biryani with Lachha rabdi , Malai Kofta with Jalebi, Chole Bhature with Rasgulla .</p>
        <div>
        <Link to='/menu'><img className="home-images" src={cont3} alt=""/></Link>
        </div>
  		</div>

  		</div>
        </div>

        <Location/>
        <OpeningHours/>
        <Footer/>
        </>
    )
}

export default Home;