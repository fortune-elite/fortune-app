import React from 'react';
import './css/MenuBar.css';
import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai';
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
              <button><AiFillCloseCircle/></button>
              <ul className ='drop'>
                <li>Logout</li>
                <li>Contact</li>
                <li>F & Q</li>
                <li>Invest</li>
              </ul>
              
          </div>
      </div>
    )
}

 export default MenuBar;