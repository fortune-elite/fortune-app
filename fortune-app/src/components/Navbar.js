import './css/Navbar.modules.css'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    return (
        <header> 
            <div className="logo">
               
                <span >
                   Fortune  
                </span>
                
            </div>
            <ul className="right">
                <li><a href="#">Save</a></li>
                <li><a href= "#">Invest</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href = "#">Login</a></li>
                <li className="signup"><a href="#">Sign Up</a></li>
                
            </ul>
            <AiOutlineMenu className='right-menu'/>
        </header>
    )
        
    
};

export default Navbar;