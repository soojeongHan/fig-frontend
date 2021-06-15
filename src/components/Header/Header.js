import React from "react";
import styled from "styled-components";
import Button from "../common/Button/Button";

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.color.lightGrey};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
`;
const Navigation = styled.nav`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const LeftSide = styled.div`
  margin-left: 40px;
`;
const RightSide = styled.div`
  margin-right: 40px;
`;
const Brand = styled(Button)`
  background: ${({ theme }) => theme.color.lightGrey};
  font-size: 1.2rem;
`;
const Feature = styled(Button)`
  background: ${({ theme }) => theme.color.lightGrey};
`;
const SignUpButton = styled(Button)`
  padding: 0.8rem 1.2rem;
  background: ${({ theme }) => theme.color.yellow};
  &:hover {
    background: ${({ theme }) => theme.color.lightYellow};
  }
`;
const SignUp = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
`;
const CurrentPercent = styled.div.attrs(({ scrollBarPercent }) => ({
  style: {
    transform: `translateX(-${scrollBarPercent}%)`,
  },
}))`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.color.yellow};
  transition: transform 0.3s ease-out;
`;

const Header = ({ scrollBarPercent }) => {
  return (
    <HeaderContainer>
      <Navigation>
        <LeftSide>
          <Brand>Kraft8</Brand>
          <Feature>Explore</Feature>
          <Feature>Work</Feature>
          <Feature>Services</Feature>
          <Feature>Contact</Feature>
        </LeftSide>
        <RightSide>
          <Feature>Login</Feature>
          <SignUpButton>
            <SignUp href="#">Sign Up</SignUp>
          </SignUpButton>
        </RightSide>
        <CurrentPercent scrollBarPercent={scrollBarPercent} />
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
