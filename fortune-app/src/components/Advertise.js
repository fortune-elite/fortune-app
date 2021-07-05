import React from 'react';
import {AiOutlineRight} from 'react-icons/ai';

import './css/Advertise.css'

const Advertise = () => {
    return(
        <div className="advertise">
            <section className="section1">
                <img src="https://img.freepik.com/free-photo/beautiful-muslim-woman-advertises-modern-gadget-holds-smart-phone-device-with-blank-screen-your-advertisement-wears-traditional-veil-head_273609-27064.jpg?size=626&ext=jpg" alt="advertisement image" />
            </section>

            <section className="section2">
                <p>
                    "Still my go-to-app for savings. The user interface wooms me to coming back every nw and then.Then the blog/newsletter. You guys are the best by all means. Great Interest and good support service"
                </p>
                <span>--  Aisha Yahyah</span><br></br>
                <a href="#">Read More stories <AiOutlineRight/></a>
            </section>
        </div>
    )
}

export default Advertise;