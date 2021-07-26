import "./css/Wealth.modules.css"

const Wealth = () => {
    return ( 
        <div className="Wealth">
            <div className="mt-4">
                <h1>Start building your wealth in 3 minutes</h1>
            </div>

            <div>
            <h2>
             <i className="fas fa-square mt-4"></i> Create an Accout with Us
             </h2>
  
                <p>Create an account with us today with just your name, email and phone Number.</p>
            </div>

            <div>
            <h2>
             <i className="fas fa-square mt-4"></i> Set up your security
             </h2>
                <p>Input your password/pin, fingerprint and Two-factor Authentication (2FA) to securely protect your account from unauthorized access/impersonation.</p>
            </div>

            <div>
            <h2>
             <i className="fas fa-square mt-4"></i> Add a payment Method
            </h2>

                <p>Using your debit card, bank account, USSD, QR code, setup your first plan</p>
            </div>

            <div>
            <h2>
             <i className="fas fa-square mt-4"></i> Monitor Your Earnings
             </h2>
                <p>Sit back, relax & watch as your money works for you all day, everyday</p>
            </div>

            <div className="mt-4">
                <button>Sign Up Now</button>

            </div>
        </div>
     );
}
 
export default Wealth;