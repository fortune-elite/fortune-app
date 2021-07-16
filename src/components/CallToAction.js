import './css/CallToAction.css'
import './css/Introduction.modules.css'


const CallToAction = () => {
    return (
        <div className="CallToAction">
            <h2>1,500,000+ customers</h2>
            <p>Since launch in 2021, over 1,000,000 people<br></br> have installed and used Fortune to manage<br></br> their money better, invest to avoid over-spending,<br></br> to reach their target goals and mindful of how they spend</p>
            <br></br>
            <button className="btn__create-account">Create A Free Account</button>
            <section className="download-app">
                <div className="ios">
                    <section>
                    <i className ="fab fa-apple apple"></i>
                    </section>
                    <section>
                        <span>Download from</span>
                        <span>Apple Store</span>
                    </section>
                </div>
                <div className="android">
                    <section>
                    <i className ="fab fa-google-play playstore"></i>
                    </section>
                    <section>
                        <span>Get it on </span>
                        <span>Play Store</span>
                    </section>

                </div>

            </section>
            <div className="signing__up">
                <p className="input__p">Sign up for free.<br></br> Start investing<br></br> today</p>
                <div className="input__div">
                    <input  className="placeholder" type="text" placeholder="Your email..."
                    />
                    <button>signup</button>
                </div>
            </div>
        </div>
    )
}

export default CallToAction;