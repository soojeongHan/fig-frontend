import React from "react";
import styled from "styled-components";
import Button from "../../common/Button/Button";
import { TextContent, TextHeader } from "../../common/Text/Text";
import { Mockup } from "../../../image/index";

const PortfolioContainer = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.color.white};
`;
const PortfolioHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;
const PortfolioHeaderText = styled(TextHeader)`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.yellow};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  margin-bottom: 1rem;
`;
const PortfolioHeaderContent = styled(TextHeader)`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
`;
const PortfolioContent = styled.div`
  display: flex;
`;
const PortfolioContentImageWrapper = styled.div`
  width: 40vw;
  height: 40vw;
  background: ${({ theme }) => theme.color.blue};
  border-radius: 50%;
  margin-right: 10rem;
  pointer-events: none;
`;
const PortfolioContentImage = styled.img`
  width: inherit;
  transform: scale(2) translate(0, 10%);
`;
const PortfolioContentInfo = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PortfolioContentSubject = styled(TextHeader)``;
const PortfolioContentExplain = styled(TextContent)`
  margin-top: 1.5rem;
`;
const PortfolioContentLink = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  line-height: ${({ theme }) => theme.lineHeight.xSmall};
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  padding: 1rem;
  width: 10rem;

  margin-top: 1.5rem;
  cursor: pointer;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioHeader>
        <PortfolioHeaderText>PORTFOLIO</PortfolioHeaderText>
        <PortfolioHeaderContent>Creating Results</PortfolioHeaderContent>
      </PortfolioHeader>
      <PortfolioContent>
        <PortfolioContentImageWrapper>
          <PortfolioContentImage src={Mockup} alt="" />
        </PortfolioContentImageWrapper>
        <PortfolioContentInfo>
          <PortfolioContentSubject>
            Building Brands With Purpose And Passion
            <PortfolioContentExplain>
              only those who risk going too far can possibly find out how far
              one can go.
            </PortfolioContentExplain>
          </PortfolioContentSubject>
          <PortfolioContentLink>View Case Study</PortfolioContentLink>
        </PortfolioContentInfo>
      </PortfolioContent>
    </PortfolioContainer>
  );
};

export default Portfolio;
