import './css/sevices.css';


const Services = () => {
 return( 
     <div className="services">
         <div>
            <i className ="lock fas fa-shield-alt"></i>
            <h1 className = "">
                    Your money is well protected
            </h1>

         </div>

         <div>
             <h2>
             <i className="fas fa-square"></i> Bank-Grade-Security
             </h2>
            <p>
                Our payment are secured by 256 bits SSL Security to ensure optimum security of your data electronically 
            </p>
         </div>

         <div>
            <h2>
             <i className="fas fa-square"></i> Asset Under secure Watch
             </h2>
            <p>
                    Your savings is secured with us as we invest in low-risk financial instruments held on behalf of our customers by Meristem trustees, registered with the Securities and Exchange Commission(SEC)
            </p>
         </div>

         <div>
            <h2>
             <i className="fas fa-square"></i> Fingerprint & Two-factor Authentication
             </h2>
            <p>
                Fingerprint and Two-factor Authentication by default on all fortune account to securely protect you from unauthorized access and impersonation.
            </p>
        </div>
            
         <div>
            <button>
                WHY FORTUNE
            </button>

         </div>
     </div>

        //  <Container fluid >
        //      <div className =  "mt-5">
        //         <IconContext.Provider  value = {{size:"9em", color:"blue"}} >
        //           <div className= "mx-auto security"><BsShieldLock/></div> 
        //         </IconContext.Provider>
        //             <h1 style = {{color:"blue"}} className = "text-center mt-3">
        //                 Your money is well protected
        //             </h1>
              

        //         <div className = "mt-4 text-center  ">
        //             <h1 > 
        //                <IconContext.Provider  value = {{size:"0.6em", color:"black"}}  >
        //                   <BsFillSquareFill/>
        //                </IconContext.Provider>  Bank-Grade Security
        //             </h1>
        //             <p style ={{fontSize:"1.5em"}} className =" mt-4">
        //                 Our payment are secured by 256 bits SSL Security to ensure optimum security of your data electronically
        //             </p>
        //         </div>

        //         <div className = "mt-6 text-center " >
        //             <h1 > 
        //                 <IconContext.Provider  value = {{size:"0.6em", color:"black"}} >
        //                 <BsFillSquareFill/>
        //                 </IconContext.Provider>  Asset under secure watch 
        //             </h1>
        //             <p style ={{fontSize:"1.5em"}} className =" mt-4">
        //                 Your savings is secured with us as we invest in low-risk financial instruments held on behalf of our customers by Meristem trustees, registered with the Securities and Exchange Commission(SEC) </p>
        //         </div>

        //         <div className = "mt-6 text-center " >
        //             <h1>  
        //                 <IconContext.Provider  value = {{size:"0.6em", color:"black"}} >
        //                 <BsFillSquareFill/>
        //                 </IconContext.Provider>   Fingerprint & Two-factor Authentification (2FA)
        //                 </h1>
        //             <p style ={{fontSize:"1.5em"}} className =" mt-4">
        //                 Fingerprint and Two-factor Authentification by default on all fortune account to securely protect you from unauthorized access and impersonation.
        //             </p>
        //         </div>

        //         <div className = "text-center mt-6 mb-5 ">
        //         <Button href = "#" variant="secondary" className ="button-style pt-3 " style= {{fontSize:"1.5em", fontWeight:"bold"}} >
        //             WHY FORTUNE? 
        //         </Button>
        //         </div>


        //      </div>

 
        //  </Container>

 
 )   
}

export default Services;