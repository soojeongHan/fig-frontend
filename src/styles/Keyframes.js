import { keyframes } from "styled-components";

export const cart = keyframes`
  12.5% {
      transform: translateX(-60px) rotate(-18deg);
  }
  25%,
  45%,
  55%,
  75% {
      transform: none;
  }
  50% {
      transform: scale(.9);
  }
  44%,
  56% {
      transform-origin: 12px 23px;
  }
  45%,
  55% {
      transform-origin: 50% 50%;
  }
  87.5% {
      transform: translateX(70px) rotate(-18deg);
  }
  100% {
      transform: translateX(140px) rotate(-18deg);
  }
`;

export const shake = keyframes`
  0% {
    background: red;
  }
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
  100% {
    background: #4d66ff;
    transform: translate3d(0, 0, 0); }
  }
`;

export const down = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, -100%);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
export const left = keyframes`
  0% {
    opacity: 0;
    transform: translate(100%, 0);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
export const right = keyframes`
  0% {
    opacity: 0;
    transform: translate(-100%, 0);
  }
  50% {
      opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
export const up = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 100%);
  }
  50% {
      opacity: 0;
    }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
