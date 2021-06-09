import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button/Button';

const HeaderContainer = styled.header`
  background: #f1f1f1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 7.5%;
`;
const LeftSide = styled.div`
`;
const RightSide = styled.div`
`;
const Brand = styled(Button)`  
  background: #f1f1f1;
  font-size: 1.2rem;
`;
const Feature = styled(Button)`
  background: #f1f1f1;
`

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSide>
        <Brand>Kraft8</Brand>
        <Feature>Explore</Feature>
        <Feature>Work</Feature>
        <Feature>Services</Feature>
        <Feature>Contact</Feature>
      </LeftSide>
      <RightSide>
        <Feature>Login</Feature>
        <Button theme={{
          background: '#ffa900', color: '#fff'
        }} href="/">Sign Up</Button>
      </RightSide>
    </HeaderContainer>
  );
}

export default Header;