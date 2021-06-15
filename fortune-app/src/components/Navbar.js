import './Navbar.modules.css'

const Navbar = () => {
    return (
        <header>
            <div className="logo">
                <span className="logo__img"><img src="logo192.png" alt="Fortune logo" width={50}/></span>Fortune
            </div>
            <ul className="right">
                <li><a href="#">Save</a></li>
                <li><a href= "#">Invest</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href = "#">Login</a></li>
                <li className="signup"><a href="#">Sign Up</a></li>
            </ul>
        </header>
    )
        
    
};

export default Navbar;