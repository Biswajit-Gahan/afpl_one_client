import React from "react";
import { Container } from "./loading.screen.styles";

const LoadingScreen = () => {
  return (
    <Container className="loading-screen-container">
      <svg width="64" height="66" viewBox="0 0 64 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="annapurna">
          <path id="purple"
            d="M11.2445 46.3681H25.3126L28.5702 51.6241H0.870519L15.7968 26.0361H36.3768L33.0503 32.0741H19.7748H19.5015L19.354 32.3041L10.8237 45.5981L10.3296 46.3681H11.2445Z"
            fill="#5C4385" stroke="#5C4385" />
          <path id="orange"
            d="M51.9968 45.516L44.8242 35.3234L48.864 29.2637L63.0869 51.5098L31.7067 51.5098L22.1997 35.0553L28.8044 35.0553L35.2535 46.0566L35.3984 46.3038L35.6849 46.3038L51.5879 46.3038L52.5511 46.3038L51.9968 45.516Z"
            fill="#E9721A" stroke="#E9721A" />
          <path id="green"
            d="M31.3198 11.9937L23.7773 23.5825L17.5792 23.5825L31.5921 1.08066L47.0077 26.5245L37.2273 42.5323L33.483 36.6606L39.7931 26.3326L39.9447 26.0846L39.8041 25.8301L32.1765 12.0247L31.7739 11.296L31.3198 11.9937Z"
            fill="#5EBD2B" stroke="#5EBD2B" />
        </g>
      </svg>
    </Container>
  );
};

export default LoadingScreen;