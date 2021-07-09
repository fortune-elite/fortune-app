import './css/CompanyLinks.css';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'


const CompanyLinks = () => {
    return (
        <div className='container'>
           <div className="thisDiv1">
               <h1>Company</h1>
               <p>About Us</p>
               <p>Careers</p>
               <p>Blog</p>
               <p>Ambassadors</p>
           </div>

           <div className="thisDiv11">
           <h1>Resources</h1>
               <p>FAQs</p>
               <p>Security</p>
               
           </div>
           
           <div className="thisDiv2">
               <h1>Product</h1>
               <p>Saving Plans</p>
               <p>Investment Plans</p>
               <p>Mutual Funds</p>
               <p>Get a Loan</p>
           </div>

           <div className="thisDiv22">
               <h1>Legal</h1>
               <p>Terms</p>
               <p>Privacy</p>
               
           </div>

           <div className="thisDiv3">
               <h1>Contact</h1>
               <p>fortunechamps1@gmail.com</p>
               <p>+234 8102871334</p>
               <p><AiFillFacebook className="linksFeed"/> <AiFillInstagram className="linksFeed"/> <AiFillTwitterCircle className="linksFeed"/></p>
            
           </div>
        </div>
    )
}

export default CompanyLinks;