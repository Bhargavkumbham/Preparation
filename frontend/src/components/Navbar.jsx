import React from 'react';
import './Navbar.css';
function Navbar (props){
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/">{props.brandName}</a>
        </div>
        
        <ul className="navbar-menu">
          {props.menuItem.map(item => (
            <li key={item.title} className="navbar-item">
              <a href={item.link} className='navbar-link'>{item.title}</a>
              </li>                 
          ))}
        </ul>                                                   
      </div>
    </nav>
  );
};                                                                                                                                                                                                                                                      

export default Navbar;                                                                                              