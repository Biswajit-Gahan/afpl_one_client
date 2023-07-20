import styled from "styled-components";
import constants from "../../utils/constants";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: transparent;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;

  .navbar-wrapper {
    width: 80%;
    height: 100%;
    background-color: ${({ theme }) => (theme.backgroundNavbar)};
    overflow-y: auto;
    overflow-x: hidden;
    padding: 10px 20px;
    box-shadow: ${constants.boxShadowAlternative};
  }

  .close-button {
    padding: 10px 20px;
    color: var(--annapurna-purple);
  }

  .close-icon:hover {
    color: var(--annapurna-orange);
  }

  /* HOME STYLES */
  .home-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    color: var(--black);

    .brand-logo {
      min-width: 200px;
      max-width: 200px;
    }

    .home-top-container {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .home-navigation-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .menu {
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: 600;
      gap: 15px;

      &:hover {
        color: var(--annapurna-orange);
      }
    }

    .icon {
      font-size: 20px;
    }
  }

  .divider {
    width: 100%;
    height: 0.8px;
    color: red;
    background-color: ${({ theme }) => (theme.divider)};
  }

  li {
    list-style: none;
    display: flex;
      /* align-items: center; */
      font-size: 15px;
      font-weight: 600;
      gap: 15px;
  }

  .language-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .custom-icon {
    width: 20px;
    font-size: 14px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: var(--black);
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
    font-weight: 600;
    color: var(--white);
    transition: transform 0.1s ease-in-out;

    &:hover {
      transform: scale(0.96);
    }
  }
`;