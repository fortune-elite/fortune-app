import './css/Introduction.modules.css'

const Introduction = () => {
    return (
     <div className="introduction">
        <div className="introduction__upper">
            <h1 className= "introduction__title">Investing and Saving <br></br>in a better way</h1>
            <section>
                Fortune helps customers to achieve their<br></br> monetary goals by helping them Save & <br></br>invest, Fissure bills, Obtaining a loan. <br></br>Control your money with spending<br></br> analytics
            </section>
            <button className="btn__create-account">Create A Free Account</button>
            <section className="download-app">
                <div className="ios">
                    <section>
                        <img src="logo192.png" width={50}></img>
                    </section>
                    <section>
                        Download from <br></br>
                        <span>App Store</span>
                    </section>
                </div>
                <div className="android">
                    <section>
                        <img src="logo192.png" width={50}></img>
                    </section>
                    <section>
                        <span>Get it on </span>
                        <span>Play Store</span>
                    </section>
                </div>
            </section>
        </div>
        <br/>
        <div className="introduction__lower">
            <p className="lower-one">Fortune, the solution towards a better financial future </p>
            <p className="lower-two">We help you save money without putting forth a lot of effort with <br></br> computerized savings </p>
        </div>

     </div>

    )
}

export default Introduction