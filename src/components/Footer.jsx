import {Link } from 'react-router-dom'
import { HashLink as L } from 'react-router-hash-link';
import './footer.css'
const Footer = () =>{
    return(
        <>
        <footer>
        <div className='footer'>
        <div id='footer-list'>
        
            <L smooth to='/#'>Home</L>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        
        </div>
        
        <div className='phno'>
        <p class="phoneEmail">Phone : 01 555 4545</p>
        <p>Email : help@tasteofindia.ie</p>
        </div>
        
        </div>
        </footer>
        </>
    )
}
export default Footer;