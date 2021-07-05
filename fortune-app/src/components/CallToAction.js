import React from "react";
import './css/CallToAction.css'
import './css/Introduction.modules.css'
const CallToAction = () => {
    return (
        <div className="CallToAction">
            <h2>1,500,000+ customers</h2><br></br><br></br>
            <p>Since launch in 2021, over 1,000,000 people<br></br> have installed and used Fortune to manage<br></br> their money better, invest to avoid over-spending,<br></br> to reach their target goals and mindful of how they spend</p>
            <br></br>
            <button className="btn__create-account">Create A Free Account</button>
            <section className="download-app">
                <div className="ios">
                    <section>
                    <i className ="fab fa-apple apple"></i>
                    </section>
                    <section>
                        Download from <br></br>
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
                <p className="input__p">Sign up for free. Start investing today</p>
                <div className="input__div">
                    <input type="text" placeholder="Your email..." id="email"/>
                    <button>signup for free</button>
                </div>
            </div>
        </div>
    )
}

export default CallToAction;