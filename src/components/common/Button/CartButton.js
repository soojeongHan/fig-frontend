import React from "react";
import styled, { css } from "styled-components";
import { shake, cart } from "../../../styles/Keyframes";

const ProductButton = styled.button`
  position: relative;
  border: none;
  background: none;
  padding: 8px 28px;
  border-radius: 8px;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  min-width: 144px;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.blue};
  transform: scale(1);
  transition: transform 0.4s cubic-bezier(0.36, 1.01, 0.32, 1.27);

  &:active {
    transform: scale(0.95);
  }

  ${(props) =>
    props.$loading &&
    css`
      pointer-events: none;
    `};

  ${(props) =>
    props.$error &&
    css`
      animation: ${shake} 0.75s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
    `}

  box-sizing: border-box;
  & > * {
    box-sizing: border-box;
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
`;

const ProductButtonText = styled.span`
  font-size: 14px;
  font-weight: 500;
  display: block;
  position: relative;
  padding-left: 24px;
  margin-left: -8px;
  line-height: 26px;
  transform: translateY(0px);
  transition: transform 0.7s ease;

  &:before {
    content: "";
    width: 14px;
    height: 2px;
    left: 2px;
    top: 12px;
    border-radius: 1px;
    position: absolute;
    background: currentColor;
    transform: scale(0.75) rotate(0deg);
    transition: transform 0.65s ease 0.05s;
  }
  &:after {
    content: "";
    width: 14px;
    height: 2px;
    left: 2px;
    top: 12px;
    border-radius: 1px;
    position: absolute;
    background: currentColor;
    transform: scale(0.75) rotate(90deg);
    transition: transform 0.65s ease 0.05s;
  }

  ${(props) =>
    props.$loading &&
    css`
      transform: translateY(-32px);

      &:before {
        width: 2px;
        height: 14px;
        left: 8px;
        top: 6px;
        transform: scale(0.75) rotate(180deg);
      }
      &:after {
        width: 2px;
        height: 14px;
        left: 8px;
        top: 6px;
        transform: scale(0.75) rotate(270deg);
      }
    `}
`;

const ProductCart = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -13px 0 0 -18px;
  transform-origin: 12px 23px;
  transform: translateX(-120px) rotate(-18deg);

  &:before,
  &:after {
    content: "";
    position: absolute;
  }
  &:before {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.white};
    bottom: 0;
    left: 9px;
    filter: drop-shadow(11px 0 0 ${({ theme }) => theme.color.white});
  }
  &:after {
    width: 16px;
    height: 9px;
    background: ${({ theme }) => theme.color.white};
    left: 9px;
    bottom: 7px;
    transform-origin: 50% 100%;
    transform: perspective(4px) rotateX(-6deg) scaleY(0);
    transition: transform 1.2s ease 0s;
  }
  svg {
    z-index: 1;
    width: 36px;
    height: 26px;
    display: block;
    position: relative;
    fill: none;
    stroke: ${({ theme }) => theme.color.white};
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    polyline:last-child {
      stroke: ${({ theme }) => theme.color.blue};
      stroke-dasharray: 10px;
      stroke-dashoffset: 10px;
      transition: stroke-dashoffset 0.4s ease 0s;
    }
  }

  ${(props) =>
    props.$loading &&
    css`
      &:after {
        transform: perspective(4px) rotateX(-6deg) scaleY(1);
        transition: transform 1.2s ease 0.8s;
      }
      svg > polyline:last-child {
        stroke-dashoffset: 0px;
        transition: stroke-dashoffset 0.4s ease 1.73s;
      }
      animation: ${cart} 3.4s linear forwards 0.2s;
    `};
`;

const CartButton = ({ loading, error, onClick, children }) => {
  return (
    <ProductButton onClick={() => onClick()} $loading={loading} $error={error}>
      <ProductButtonText $loading={loading}>{children}</ProductButtonText>
      <ProductCart $loading={loading}>
        <svg viewBox="0 0 36 26">
          <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
          <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
        </svg>
      </ProductCart>
    </ProductButton>
  );
};

export default CartButton;
