import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './navbar.css';
import { TiGroup } from 'react-icons/ti';
import { FcSettings } from 'react-icons/fc';
import { FcContacts } from 'react-icons/fc';
import { FcComments } from 'react-icons/fc';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo">
            <TiGroup />
        </Link>
      </div>
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
              <CustomLink to="/chat">
                <FcComments className='icon' />
                 Chat
              </CustomLink>
          </li>
          <li className="navbar-item">
              <CustomLink to="/contacts">
                <FcContacts className='icon' />
                Contacts
              </CustomLink>              
          </li>
          <li className="navbar-item">
              <CustomLink to="/settings">
                <FcSettings className='icon' />
                Settings
              </CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end:true })

  return (
      <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
              {children}
          </Link>
      </li>
  )
}