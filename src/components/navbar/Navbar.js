import React from "react";
// STYLED COMPONENTS
import { Container } from "./navbar.styles";
// ICONS
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LanguageIcon from '@mui/icons-material/Language';
// ASSETS
import brandLogoImage from "../../assets/images/afpl-one-logo-colored.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const login = true;

  return (
    <Container>
      {/* MAIN WRAPPER */}
      <div className="main-wrapper">
        {/* BRAND LOGO CONTAINER */}
        <div className="brand-logo-container">
          <img src={brandLogoImage} alt="brand-logo-img" className="brand-logo-img" />
        </div>

        {/* NAVBAR CONTAINER */}
        <div className="navbar-container">
          {/* NAVBAR WRAPPER*/}
          <div className="navbar-wrapper">
            {/* NAVBAR LIST */}
            <ul className="navbar-list">
              <li className="navbar-item">
                <NavLink to="#">Home</NavLink>
              </li>
              {
                login && <li className="navbar-item">
                  <NavLink to="#">Dashboard</NavLink>
                </li>
              }
              <li className="navbar-item">
                {
                  login
                    ? <NavLink to="#">Logout</NavLink>
                    : <NavLink to="#">Login</NavLink>
                }
              </li>
            </ul>

            {/* LANGUAGE LIST CONTAINER */}
            <div className="language-list-container">
              <LanguageIcon className="nav-icon" />
              <span className="current-language">En</span>
              {/* LANGUAGE LIST WRAPPER */}
              <div className="language-list-wrapper">
                {/* LANGUAGE LIST */}
                <ul className="language-list">
                  <li className="language-item">English</li>
                  <li className="language-item">Hindi</li>
                </ul>
              </div>
            </div>

            {/* DOWNLOAD APP BUTTON */}
            <button className="download-app-button">Download App</button>
          </div>

          {/* NAVBAR MOBILE CONTAINER */}
          <div className="navbar-mobile-container">
            <MenuRoundedIcon className="navbar-mobile-icon" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;