import { css } from "styled-components";

export const navbarResponsive = {
  tablet: css`
    padding: 0 30px;

    .brand-logo-container {
      height: 40px;
    }

    .navbar-item {
      font-size: 13px;
    }

    .nav-icon {
      font-size: 15px;
    }

    .current-language {
      font-size: 13px;
    }

    .download-app-button {
      min-width: 120px;
      min-height: 35px;
      max-width: 120px;
      max-height: 35px;
      font-size: 13px;
    }
  `,

  mobile: css`
    min-height: 60px;
    max-height: 60px;

    .navbar-mobile-container {
      display: block;

      &:hover {
        color: var(--annapurna-orange);
      }
    }

    .navbar-wrapper {
      display: none;
    }
  `,
}