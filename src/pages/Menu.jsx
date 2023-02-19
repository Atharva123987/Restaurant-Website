import NavBar from '../components/NavBar'
import OpeningHours from '../components/OpeningHours'
import Footer from '../components/Footer'
import Img3 from '../assets/menu/fried-idli-recipe-step-by-step-instructions.jpg'
import Img2 from "../assets/menu/harabhara.jpg"
import Img1 from "../assets/menu/paneer-65-recipe.jpg"
import Img4 from '../assets/menu/Veg-Biryani-2-3-500x375.jpg'
import Img5 from "../assets/menu/CHOLE-POORI-1.jpg"
import Img6 from "../assets/menu/Malai-Kofta-3-1.jpg"
import Img7 from "../assets/menu/Veg-Biryani-2-3-500x375.png" 
import Img8 from "../assets/menu/Jalebi-Blog-Thumbnail-500x500.png" 
import Img9 from "../assets/menu/Malai-Kofta-3-1.png"  
import Img10 from "../assets/menu/julaibee.jpg"
import Img11 from "../assets/menu/Lachcha-rabri-4.jpg"
import Img12 from "../assets/menu/rasgulla.jpg"
import './menu.css'
const Menu = () =>{

    return(
        <>
        <NavBar/>
  
        <div id='menu-container' className='container'>

        <h2>Our Menu</h2>
		
		<h2>Starters</h2>
        <div className='contents'>
		
        <div class="boxes">
  			<h3>Paneer 65</h3>
  			<p class="bodyText">Paneer 65 is a spicy Hyderabadi appetizer made with paneer, flour, yogurt, curry leaves and spices. Firstly paneer is batter fried until crisp and then tossed in a spicy tempering masala.</p>
  			<img class="menu-images" src={Img1}alt="paneer-65"/>
  		</div>
  		
  		<div class="boxes">
  			<h3>Harabhara Kebab</h3>
            <p class="bodyText">Hara bhara kabab are pan-fried spiced patties made with a mix of spinach, green peas and potatoes. The recipe is easy to make and healthy as well. </p>
  			<img class="menu-images" src={Img2}alt="harabhara-kebab"/>
  		</div>
  		
  		<div class="boxes">
  			<h3>Idli Fry</h3>
  			<p class="bodyText">Fried idli or Masala Idli Fry is a mildly spiced sautéed dish made from idlis. The idlis are fried till they are crispy and then tossed in curry leaves and South Indian spices.</p>
  			<img class="menu-images" src={Img3} alt="fried-idli"/>
  		</div>
        </div>

		<h2>Mains</h2>
        <div className='contents'>

            <div class="boxes ">
                <h3>Veg Biryani</h3>
                <p class="bodyText">Vegetable Biryani is an aromatic rice dish made with basmati rice, mix veggies, herbs and biryani spices. Biryani is a celebration of exotic flavors, vibrant colors and pleasing aromas infused into a pot of goodness.</p>
                <img class="menu-images" src={Img4} alt=""/>
            </div>
            
            <div class="boxes">
                <h3>Chole Bhature</h3>
                <p class="bodyText">Chole Bhature also known as Chana Bhatura is one of the most popular Punjabi dish liked almost all over India. Chole stands for a spiced tangy chickpea curry and Bhatura is a soft and fluffy fried leavened bread.</p>
                <img class="menu-images" src={Img5} alt=""/>
            </div>
            
            <div class="boxes">
                <h3>Malai Kofta</h3>
                <p class="bodyText">Malai Kofta is a very popular Indian dish where kofta made of potato and paneer are deep fried and served with a creamy and spiced tomato curry.The kofta in this malai kofta is made with paneer, potato, ginger, cilantro and some nuts.</p>
            <img class="menu-images" src={Img6} alt=""/>
            </div>
  		
  	

        </div>

		<h2>Deserts</h2>
        <div className='contents'>

  		<div class="boxes">
  			<h3>Jalebi</h3>
  			<p class="bodyText">Jalebi is a sweet snack popular all over South and Western Asia. It is made by deep-frying maida flour (plain flour or all-purpose flour) batter in pretzel or circular shapes, which are then soaked in sugar syrup.</p>
  			<img class="menu-images" src={Img10} alt="jalebi"/>
  		</div>
  		
  		<div class="boxes">
  			<h3>Lachha Rabdi</h3>
  			<p class="bodyText">Rabri is a sweet, condensed-milk-based dish made by boiling milk on low heat for a long time until it becomes dense and changes its colour to off-white or pale yellow. Jaggery, spices, and nuts are added to it to give it flavor.</p>
  			<img class="menu-images" src={Img11} alt="rabdi"/>
  		</div>
  		
  		<div class="boxes">
  			<h3>Rasgulla</h3>
  			<p class="bodyText">Rasgulla, Rasagola or Roshogolla is a South Asian syrupy dessert popular in the Indian subcontinent. It is made from ball-shaped dumplings of chhena and semolina dough, cooked in light syrup made of sugar.</p>
  			<img class="menu-images" src={Img12} alt="rasgulla"/>
  		</div>
  		
  		

        </div>

		<h2>Specials</h2>
        <div className='contents'>
  		
  		<div class="boxes">
  			<h3>Veg Biryani with Lachha Rabdi</h3>
  			<p class="bodyText">Vegetable Biryani with your favourite Lachha Rabdi make up an excellent combination.</p>
  			<img class="menu-images" src={Img7}/>
  		</div>
  		
  		<div class="boxes">
  			<h3>Chole Bhature with Jalebi</h3>
  			<p class="bodyText">Chole Bhature with crispy and sweet Jalebi gets your tastebuds dancing.</p>
  			<img class="menu-images" src={Img8}/>
  		</div>
  		
  		<div class="boxes">
  			<h3>Malai Kofta with Rasgulla</h3>
  			<p class="bodyText">Malai Kofta with Rasgulla make a double dose of sweetness</p>
  		  <img class="menu-images" src={Img9}alt="malaikofta-rasgulla"/>
  		</div>
  		
  		

        </div>
        </div>

        <OpeningHours/>
        <Footer/>
        </>
    )
}
export default Menu;
