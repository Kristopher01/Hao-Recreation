import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './Navbar-Elements';


const Navbar = () => {
  return <>
      <Nav>
          <NavLink to="/">
              <h1>Hao's Cuisine</h1>
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="/Home" activeStyle>
                  Home
              </NavLink>
              <NavLink to="/Menu" activeStyle>
                  Menu
              </NavLink>
              <NavLink to="/order" activeStyle>
                  Order Online
              </NavLink>
              <NavLink to="/contact-us" activeStyle>
                  Contact Us
              </NavLink>
          </NavMenu>
      </Nav>
      </>;
};

export default Navbar;
