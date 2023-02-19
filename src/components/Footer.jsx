import {Link } from 'react-router-dom'
import './footer.css'
const Footer = () =>{
    return(
        <>
        <footer>
        <div className='footer'>
        
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Menu</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Contact</Link></li>
        </ul>
        </div>
        <p class="phoneEmail">Phone : 01 555 4545 or Email : help@tasteofindia.ie</p>
        
        </footer>
        </>
    )
}
export default Footer;