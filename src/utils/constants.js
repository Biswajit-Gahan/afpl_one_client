import { css } from "styled-components";

const constants = {
  boxShadow: css`
    -webkit-box-shadow: 0px 2px 14px -4px var(--black-shadow);
    -moz-box-shadow: 0px 2px 14px -4px var(--black-shadow);
    box-shadow: 0px 2px 14px -4px var(--black-shadow);
  `,

  boxShadowAlternative: css`
    -webkit-box-shadow: 2px 0px 14px -4px var(--black-shadow);
    -moz-box-shadow: 2px 0px 14px -4px var(--black-shadow);
    box-shadow: 2px 0px 14px -4px var(--black-shadow);
  `,

  responsive: {
    mobile: "650px",
    tablet: "1100px",
    laptop: "1500px",
    desktop: "2560px",
  },

  darkTheme: {
    backgroundMain: "rgba(45, 0, 91, 1)",
    backgroundNavbar: "rgba(55, 0, 111, 1)",
    backgroundDefault: "rgba(33, 33, 33, 0.4)",
    color: "rgba(255, 255, 255, 1)",
    divider: "rgba(189, 189, 189, 1)",
  },

  lightTheme: {
    backgroundMain: "rgba(250, 250, 250, 1)",
    backgroundNavbar: "rgba(247, 247, 247, 1)",
    backgroundDefault: "rgba(239, 239, 239, 1)",
    color: "rgba(78, 0, 155, 1)",
    divider: "rgba(189, 189, 189, 1)",
  },
};

export default constants;