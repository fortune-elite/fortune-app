import "./css/Download.modules.css"

const Download = () => {
    return ( 
        <div className="Download">
            <div className="StarCard">
                <div className="Top">
                    <div>
                    <p>5.0<span>/5</span></p>
                    </div>
                    <div>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
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
                </div>
                <div>
                    <h1>Available on Play Store</h1>
                </div>
                <div>
                <p>“Good UI...love the interface, it’s user friendly...Good work to the developer”- Aisha, July, 2021</p>

                </div>
                <div>
                    <a>Download Now &gt;</a>

                </div>  
            </div>
            <div className="StarCard">
            <div className="Top">
                    <div>
                        <p>5.0<span>/5</span></p>
                    </div>
                    <div>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="ios">
                        <section>
                        <i className ="fab fa-apple apple"></i>
                        </section>
                        <section>
                            Download from <br></br>
                            <span>Apple Store</span>
                        </section>
                    </div>
                </div>
                <div>
                <h1>Available on Apple Store</h1>
                </div>
                <div>
                    <p>“The app is great, I have been using it for a long time without having issues.”- Hassan, July, 2021</p>
                </div>
                <div>
                    <a>Download Now &gt; </a>

                </div>  

            </div>

        </div>
     );
}
 
export default Download;