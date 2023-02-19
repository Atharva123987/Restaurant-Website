import {Link }from 'react-router-dom'
import './navbar.css'
import logo from '../assets/imgs/bigindianrestaurantlogo1.png'
const NavBar = () =>{
    return(
        <>
        <div className='navbar-container'>

        <Link to='/'><img src={logo} id='logo' alt='logo'/></Link>
        
        <div className='navbar'>
        <ul>
            
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Menu</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Contact</Link></li>
        </ul>
        </div>

        </div>

        </>
    )
}

export default NavBar;