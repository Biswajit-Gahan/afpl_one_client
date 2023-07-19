import styled from "styled-components";
import constants from "../../utils/constants";

export const Container = styled.nav`
  min-height: 90px;
  max-height: 90px;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  align-items: center;
  ${constants.boxShadow}
  padding: 0 150px;

  .main-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand-logo-container {
    height: 60px;
  }

  .brand-logo-img {
    height: 100%;
  }

  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  li {
    list-style: none;
  }

  .navbar-list {
    display: flex;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  .navbar-item {
    font-size: 15px;
    font-weight: 500;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: -15px;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: var(--annapurna-orange);
      transition: left 0.3s ease-in-out;
      visibility: hidden;
    }

    &:hover {
      &::after {
        left: 0;
        visibility: visible;
      }
    }
  }

  .nav-icon {
    font-size: large;
    color: var(--black);
  }

  .language-list-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 5px;
    cursor: pointer;

    &:hover .language-list-wrapper {
      visibility: visible;

      .language-list {
        transform: translateY(0);
      }
    }
  }

  .current-language {
    font-size: 15px;
    font-weight: 500;
    color: var(--black);
  }

  .language-list-wrapper {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    background-color: transparent;
    padding-top: 20px;
    visibility: hidden;
  }

  .language-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--off-white);
    ${constants.boxShadow}
    border-radius: 5px;
    transform: translateY(10%);
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }

  .language-item {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    max-width: 80px;
    min-height: 40px;
    font-size: small;
    font-weight: 500;
    color: var(--black);

    &:hover {
      background-color: var(--annapurna-orange);
      color: var(--white);
    }
  }

  .download-app-button {
    cursor: pointer;
    min-width: 125px;
    min-height: 40px;
    max-width: 125px;
    max-height: 40px;
    background: linear-gradient(
      var(--annapurna-orange-bold),
      var(--annapurna-orange)
    );
    border: none;
    border-radius: 3px;
    font-weight: 500;
    color: var(--white);
    transition: transform 0.1s ease-in-out;

    &:hover {
      transform: scale(0.96);
    }
  }

  .navbar-mobile-container {
    display: none;
  }

  
`;