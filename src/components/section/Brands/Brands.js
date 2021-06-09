import React from "react";
import styled from "styled-components";
import StyledButton from "../../common/Button/Button";
import { image8 } from "../../../image/index";
import { TextContent, TextHeader } from "../../common/Text/Text";

const BrandsContainer = styled.div`
  background: #f1f1f1;
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
`;
const BrandsHeader = styled.div`
  width: 500px;
  margin: 4rem 0;
`;
const BrandsHeaderText = styled(TextHeader)`
  font-size: 2.5rem;
  line-height: 3rem;
`;
const BrandsExplanation = styled(TextContent)`
  color: grey;
  font-size: 0.9rem;
  font-weight: lighter;
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
  font-size: 1.1rem;
  font-weight: bolder;
`;
const Button = styled(StyledButton)`
  width: 150px;
`;
const BrandsImageWrapper = styled.div`
  width: 400px;
  height: 600px;
`;
const BrandsImage = styled.img`
  object-fit: none;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Brands = () => {
  return (
    <BrandsContainer>
      <BrandsInfo>
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
        <Button
          theme={{
            background: "#4d66ff",
            color: "#fff",
          }}
        >
          Get Started
        </Button>
      </BrandsInfo>
      <BrandsImageWrapper>
        <BrandsImage src={image8} />
      </BrandsImageWrapper>
    </BrandsContainer>
  );
};

export default Brands;
