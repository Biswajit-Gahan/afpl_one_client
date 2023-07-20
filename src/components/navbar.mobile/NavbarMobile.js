import React from "react";
import { createPortal } from "react-dom";
// ICONS
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Container } from "./navbar.mobile.styles";
// IMAGES
import brandImage from "../../assets/images/afpl-one-logo-colored.png";
import { Link, NavLink } from "react-router-dom";

const NavbarMobile = ({ theme }) => {
  // TEMPORARY VARIABLES
  const isDashboard = !true;
  const isLoggedIn = true;

  return createPortal(
    <Container theme={theme}>
      {/* NAVBAR WRAPPER */}
      <div className="navbar-wrapper">
        {
          isDashboard
            ? <>
              {/* USER INFO CONTAINER */}
              <div div className="user-info-container">
                User Info Container
              </div>

              {/* DIVIDER */}
              <div className="divider">-</div>

              {/* DASHBOARD MENU CONTAINER */}
              <div className="dashboard-menu-container">
                Dashboard Menu Container
              </div>

              {/* DIVIDER */}
              <div className="divider">-</div>

              {/* DASHBOARD NAVIGATION CONTAINER  */}
              <div className="dashboard-navigation-container">
                Dashboard Navigation Container
              </div>

              {/* DIVIDER */}
              <div className="divider">-</div>

              {/* SOCIAL MEDIA CONTAINER */}
              <div className="social-media-container">
                Social Media Container
              </div>

              {/* DIVIDER */}
              <div className="divider">-</div>

              {/* THEME MODE CONTAINER */}
              <div className="theme-mode-container">
                Theme Mode Container
              </div>
            </>
            : <>
              {/* HOME CONTAINER */}
              <div className="home-container">
                {/* HOME TOP CONTAINER */}
                <div className="home-top-container">
                  {/* BRAND LOGO CONTAINER */}
                  <div className="brand-logo-container">
                    <img src={brandImage} alt="brand-logo" className="brand-logo" />
                  </div>

                  {/* DIVIDER */}
                  <div className="divider"></div>

                  {/* HOME NAVIGATION CONTAINER */}
                  <div className="home-navigation-container">
                    {/* HOME WRAPPER */}
                    <NavLink to="#">
                      <div className="home-wrapper menu ">
                        <HomeOutlinedIcon className="icon" />Home
                      </div>
                    </NavLink>

                    {/* DASHBOARD HOME WRAPPER */}
                    {
                      isLoggedIn && <>
                        <NavLink to="#">
                          <div className="dashboard-home-wrapper menu">
                            <GridViewOutlinedIcon className="icon" />Dashboard
                          </div>
                        </NavLink>
                      </>
                    }

                    {/* AUTHENTICATION WRAPPER */}
                    {
                      isLoggedIn
                        ?
                        <Link to="#">
                          <div className="authentication-wrapper menu">
                            <LaunchOutlinedIcon className="icon" />Logout
                          </div>
                        </Link>
                        : <Link to="#">
                          <div className="authentication-wrapper menu">
                            <ExitToAppOutlinedIcon className="icon" />Login
                          </div>
                        </Link>
                    }

                    {/* DIVIDER */}
                    <div className="divider"></div>

                    {/* LANGUAGE WRAPPER */}
                    <div className="language-wrapper">
                      {/* LANGUAGE HEADER */}
                      <div className="laguage-header menu">
                        <LanguageOutlinedIcon className="icon" />Languages
                      </div>
                    </div>

                    {/* Language List */}
                    <ul className="language-list">
                      <li><span className="custom-icon">Od</span>ଓଡ଼ିଆ</li>
                      <li><span className="custom-icon">Hi</span>हिंदी</li>
                      <li><span className="custom-icon">En</span>English</li>
                      <li><span className="custom-icon">Be</span>বাংলা</li>
                      <li><span className="custom-icon">Ka</span>ಕನ್ನಡ</li>
                    </ul>
                  </div>
                </div>

                {/* HOME BOTTOM CONTAINER */}
                <div className="home-bottom-container menu">
                  {/* DOWNLOAD APP BUTTON */}
                  <button type="button" className="download-app-button">Download App</button>
                </div>
              </div>
            </>
        }
      </div>

      {/* CLOSE BUTTON */}
      <div div className="close-button" >
        <CloseRoundedIcon className="close-icon" />
      </div >
    </Container >,
    document.querySelector("#navbar-modal")
  );
};

export default NavbarMobile;