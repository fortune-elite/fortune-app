import "./css/Card.modules.css"


const Card = () => {
    return ( 
        <div className="cards">
            <div className="container">
                <div className="cardBlue">
                    <div className="p">
                        Create an account with us within 2-3 minutes for FREE
                    </div>
                    <div>
                        <i className="far fa-clock card-icons"></i>
                    </div>
                </div>
                <div className="cardSky">
                    <div className="p">
                    Save on the go to reach your target goals
                    </div>  
                    <div>
                        <i className="fas fa-bullseye card-icons"></i>
                    </div>                  
                </div>
                <div className="cardDark">
                    <div className="p">
                        Take out a loan against your escrow account 
                    </div>
                    <div>
                        <i className="fas fa-hand-holding-usd card-icons"></i>
                    </div>
                </div>
                <div className="cardSky">
                    <div className="p">
                        Invest with us at low risks
                    </div>
                    <div>
                        <i className="fas fa-hand-holding-water card-icons"></i>
                    </div>
                </div>
                <div className="cardBlue">
                    <div className="p">
                        Al present helps you to plan,budget and spend like a pro
                    </div>
                    <div>
                        <i className="fab fa-reddit-alien card-icons"></i>
                    </div>
                </div>
            </div>
            <h2>Start Banking at Ease &gt;</h2>
        </div>
     );
}
 
export default Card;