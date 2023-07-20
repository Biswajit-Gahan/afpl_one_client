import { css } from "styled-components";

const constants = {
  boxShadow: css`
    -webkit-box-shadow: 0px 2px 14px -4px var(--black-shadow);
    -moz-box-shadow: 0px 2px 14px -4px var(--black-shadow);
    box-shadow: 0px 2px 14px -4px var(--black-shadow);
  `,
  responsive: {
    mobile: "650px",
    tablet: "1100px",
    laptop: "1500px",
    desktop: "2560px",
  },
};

export default constants;