import React from "react";
import styled from "styled-components";
import { TextContent, TextHeader } from "../common/Text/Text";
import Button from "../common/Button/Button";

const FooterContainer = styled.footer`
  background: #fff;
  display: flex;
  justify-content: space-around;
  padding: 3rem 6rem;
`;
const FooterBrandWrapper = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FooterBrand = styled.div``;
const FooterBrandName = styled(TextHeader)`
  font-size: 1.3rem;
`;
const FooterBrandExplain = styled(TextContent)`
  color: grey;
`;
const FooterCopyright = styled(TextContent)`
  font-size: 0.7rem;
  color: grey;
`;
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterExplain = styled(TextHeader)`
  font-size: 0.9rem;
`;
const FooterButton = styled(Button)`
  background: #fff;
  padding: 5px 0;
  text-align: left;
  font-weight: normal;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBrandWrapper>
        <FooterBrand>
          <FooterBrandName>Kraft8</FooterBrandName>
          <FooterBrandExplain>
            This is a big one and i consider it one of <br />
            the most important things for a designer.
          </FooterBrandExplain>
        </FooterBrand>
        <FooterCopyright>
          Copyright @ 2019 Kraft8. All Rights Reserved
        </FooterCopyright>
      </FooterBrandWrapper>
      <FooterLinks>
        <FooterExplain>Quick Links</FooterExplain>
        <FooterButton>Home</FooterButton>
        <FooterButton>Portfolio</FooterButton>
        <FooterButton>Features</FooterButton>
        <FooterButton>Team</FooterButton>
        <FooterButton>Blog</FooterButton>
      </FooterLinks>
      <FooterLinks>
        <FooterExplain>Company</FooterExplain>
        <FooterButton>About</FooterButton>
        <FooterButton>Contact</FooterButton>
        <FooterButton>Careers</FooterButton>
        <FooterButton>Press</FooterButton>
      </FooterLinks>
      <FooterLinks>
        <FooterExplain>Information</FooterExplain>
        <FooterButton>Privacy Policy</FooterButton>
        <FooterButton>Terms & Condition</FooterButton>
        <FooterButton>FAQ</FooterButton>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
