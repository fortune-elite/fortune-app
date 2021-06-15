import React from 'react'


import './Introduction.modules.css'

const Introduction = () => {
    return (
     <div className="introduction">
        <div className="introduction__upper">
            <h1 className= "introduction__title">Investing and Saving <br></br>in a better way</h1>
            <section>
                Fortune helps customers to achieve their monetary goals by helping them Save & invest, Fissure bills, Obtaining a loan. Control your money with spending<br></br> analytics
            </section>
            <button className="btn__create-account">Create A Free Account</button>
            <section className="download-app">
                <div className="ios">App Store</div>
                <div className="android">Play Store</div>
            </section>
        </div>
        <div className="introduction__lower">
            
        </div>

     </div>

    )
}

export default Introduction