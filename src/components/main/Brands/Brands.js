import React from "react";
import styled, { css, keyframes } from "styled-components";
import StyledButton from "../../common/Button/Button";
import { image8 } from "../../../image/index";
import { TextContent, TextHeader } from "../../common/Text/Text";

const leftSlide = keyframes`
  0% {
    transform: translate(-100%);  
  }
  100% {
    transform: translate(0%);  
  }
`;
const rightSlide = keyframes`
  0% {
    transform: translate(200%);  
  }
  100% {
    transform: translate(0%);  
  }
`;

const BrandsContainer = styled.div`
  background: ${({ theme }) => theme.color.lightGrey};
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BrandsInfo = styled.div`
  display: inherit;
  flex-direction: column;
  width: 600px;
  height: 500px;
  visibility: hidden;
  ${(props) =>
    props.visible &&
    css`
      visibility: visible;
      animation: ${leftSlide} 1s;
    `};
`;
const BrandsHeader = styled.div`
  width: 500px;
  margin: 4rem 0;
`;
const BrandsHeaderText = styled(TextHeader)`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  line-height: ${({ theme }) => theme.lineHeight.xLarge};
`;
const BrandsExplanation = styled(TextContent)`
  color: ${({ theme }) => theme.color.grey};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  margin-top: 1rem;
`;
const BrandsFeatureWrapper = styled.div`
  display: flex;
  width: 500px;
`;
const BrandsFeature = styled.div`
  margin-bottom: 3rem;
`;
const BrandsFeatureText = styled(TextContent)`
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  font-weight: bolder;
`;
const Button = styled(StyledButton)`
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  width: 150px;
`;
const BrandsImageWrapper = styled.div`
  width: 400px;
  height: 600px;
  visibility: hidden;
  ${(props) =>
    props.visible &&
    css`
      visibility: visible;
      animation: ${rightSlide} 1s;
    `};
`;
const BrandsImage = styled.img`
  object-fit: none;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Brands = ({ target, visible }) => {
  return (
    <BrandsContainer ref={target}>
      <BrandsInfo visible={visible}>
        <BrandsHeader>
          <BrandsHeaderText>
            Building Brands With Purpose And Passion
          </BrandsHeaderText>
          <BrandsExplanation>
            This is a big one and i consider one of the most important, and
            difficult, thing for designer to get right.
          </BrandsExplanation>
        </BrandsHeader>
        <BrandsFeatureWrapper>
          <BrandsFeature>
            <BrandsFeatureText>Idea That Provoke</BrandsFeatureText>
            <BrandsExplanation>
              Life isn't about finding yourself, it's about creating yourself.
            </BrandsExplanation>
          </BrandsFeature>
          <BrandsFeature>
            <BrandsFeatureText>Find Your Brand's Voice</BrandsFeatureText>
            <BrandsExplanation>
              Better a diamond with a flaw than a pebble without one.
            </BrandsExplanation>
          </BrandsFeature>
        </BrandsFeatureWrapper>
        <Button>Get Started</Button>
      </BrandsInfo>
      <BrandsImageWrapper visible={visible}>
        <BrandsImage src={image8} />
      </BrandsImageWrapper>
    </BrandsContainer>
  );
};

export default Brands;
