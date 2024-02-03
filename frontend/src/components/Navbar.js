import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/aureus_logo.png';
import { useUser } from '../contexts/UserContext'; 

const Dropdown = ({ children }) => {
  return (
    <div className="dropdown">
      {children}
    </div>
  );
};

const NavItem = ({ title, dropdownContent, to }) => {
  const content = dropdownContent ? (
    <div className="nav-item">
      {title}
      <Dropdown>{dropdownContent}</Dropdown>
    </div>
  ) : (
    <Link to={to} className="nav-item">
      {title}
    </Link>
  );

  return content;
};

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav className="navbar">
                      <Link to="/" className='nav-item logo-container'>
                    <img src={logo} className='logo'/> 
                </Link>
      <NavItem title="About" to="/"/>
      <NavItem title="Start Case" to="/LabDataForm"/>
      <NavItem title="Dashboard" to="/Dashboard"/>
      <NavItem title="Prices & Access" dropdownContent={<div><ul style={{listStyleType: 'none'}}>
              <li>
              <Link to="/PricingComponent">Buisness Solutions</Link>
              </li>
              <li>
              <Link to="/QuotePage">Academia and Government</Link>
              </li>
            </ul></div>} />
            <NavItem title="Contact Us" dropdownContent={<div><ul style={{listStyleType: 'none'}}>
              <li>
                <a href="mailto:AureusDatabase@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://facebook.com/AureusDatabase">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/AureusDatabase">Twitter</a>
              </li>
            </ul></div>} />
            {user ? (
              <NavItem title={user.username} to="/">{user.username}</NavItem>
       
      ) : (
        <NavItem title="Login" to="/Login"/>
      )}
    </nav>
  );
};

export default Navbar;
