import React from 'react';
import './css/MenuBar.css';
import {AiOutlineMenu} from 'react-icons/ai';
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
          <ul className={`MenuBar ${menuBar && 'active'}`} onClick={showMenuBar}>
              <li>Logout</li>
              <li>Contact</li>
              <li>F & Q</li>
              <li>Invest</li>
          </ul>
      </div>
    )
}

 export default MenuBar;