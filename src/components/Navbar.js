import './css/Navbar.modules.css'
import {AiOutlineMenu} from 'react-icons/ai'
import MenuBar from './MenuBar'
import { useState } from 'react';


const Navbar = () => {

    const [menuBar, setMenuBar] = useState(false);

    const showMenuBar = () => setMenuBar((prevState) => !prevState)
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
            {!menuBar && <AiOutlineMenu className='right-menu'onClick={showMenuBar}/>}
            {menuBar && <MenuBar onClick={showMenuBar}/>}
        </header>
    )
        
    
};

export default Navbar;