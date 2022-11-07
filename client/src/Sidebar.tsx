import React from "react";
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';


export default props => {

    return (
      <Menu {...props}>
        
        {/* Replace href with an onClick that handles which menu item was clicked, and then use that to either display ideas or challenges */}
        
        <a className="menu-item" href="/"> 
          Ideas
        </a>
        <a className="menu-item" href="/">
          Challenges
        </a>
      </Menu>
    );
  };
