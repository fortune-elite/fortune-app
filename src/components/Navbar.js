import './css/Navbar.modules.css'

const Navbar = () => {

    
    return (
        <header> 
            <div className="logo">
               
                <span >
                   Fortune  
                </span>
                
            </div>
            <ul className="right">
                <li><a href="www.google.com">Save</a></li>
                <li><a href= "www.google.com">Invest</a></li>
                <li><a href="www.google.com">FAQs</a></li>
                <li><a href = "www.google.com">Login</a></li>
                <li className="signup"><a href="www.google.com">Sign Up</a></li>
                
            </ul>
        </header>
    )
        
    
};

export default Navbar;