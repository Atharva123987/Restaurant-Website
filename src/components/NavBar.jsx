import {Link }from 'react-router-dom'
import './navbar.css'
import logo from '../assets/imgs/bigindianrestaurantlogo1.png'
const NavBar = () =>{
    return(
        <>
        <div className='navbar-container'>

        <Link to='/'><img src={logo} id='logo' alt='logo'/></Link>
        
        <div className='navbar'>
        
            
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
      
        </div>

        </div>

        </>
    )
}

export default NavBar;