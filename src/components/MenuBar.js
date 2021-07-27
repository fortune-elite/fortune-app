import React from 'react';
import './css/MenuBar.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaTimes} from 'react-icons/fa';
import { useState } from 'react';


const MenuBar = () => {

    const [menuBar, setMenuBar] = useState(false);

    const showMenuBar = () => {
        setMenuBar(prevState => {
            const state = !prevState
            return state
        })
    }
    return (
      <div>
          <AiOutlineMenu className='right-menu' onClick = {showMenuBar}/>
          <div className={`MenuBar ${menuBar && 'active'}`} onClick={showMenuBar}>
              <button className="but"><FaTimes className='closeButton'/></button>
              <ul className ='drop'>
                <li>Save</li>
                <li>Invest</li>
                <li>FAQs</li>
                <li>Login</li>
                <button className="btn-blue">Sign Up</button>
              </ul>
              
          </div>
      </div>
    )
}

 export default MenuBar;