import React from "react";
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

// Need to change console logs to switching the type of elements shown
function changeType(type: string) {
  if (type == 'idea') {
    console.log('idea')
  }
  else {
    console.log('challenge')
  }
};

export default props => {

    return (
      <Menu {...props}>
        
        {/* Replace href with an onClick that handles which menu item was clicked, and then use that to either display ideas or challenges */}
        
        <a className="menu-item" onClick={() => changeType('idea')}> 
          Ideas
        </a>
        <a className="menu-item" onClick={() => changeType('challenge')}>
          Challenges
        </a>
      </Menu>
    );
  };
