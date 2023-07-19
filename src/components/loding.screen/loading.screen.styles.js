import styled, { keyframes } from "styled-components";

const purpleAnimation = keyframes`
  0% {
    fill: transparent;
    stroke-dashoffset: 524;
  }

  50% {
    fill: var(--annapurna-purple);
    stroke-dashoffset: 0;
  }

  100% {
    fill: transparent;
    stroke-dashoffset: 524;
  }
`;

const orangeAnimation = keyframes`
  0% {
    fill: transparent;
    stroke-dashoffset: 524;
  }

  50% {
    fill: var(--annapurna-orange);
    stroke-dashoffset: 0;
  }

  100% {
    fill: transparent;
    stroke-dashoffset: 524;
  }
`;

const greenAnimation = keyframes`
  0% {
    fill: transparent;
    stroke-dashoffset: 524;
  }

  50% {
    fill: var(--annapurna-green);
    stroke-dashoffset: 0;
  }

  100% {
    fill: transparent;
    stroke-dashoffset: 524;
  }
`;

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    #purple {
      stroke-dasharray: 524;
      animation: ${purpleAnimation} 5s infinite forwards alternate;
    }

    #orange {
      stroke-dasharray: 524;
      animation: ${orangeAnimation} 5s infinite forwards alternate;
    }

    #green {
      stroke-dasharray: 524;
      animation: ${greenAnimation} 5s infinite forwards alternate;
    }
`;