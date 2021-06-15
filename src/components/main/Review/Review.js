import React from "react";
import styled, { keyframes } from "styled-components";

import { TextHeader, TextContent } from "../../common/Text/Text";

const ReviewContainer = styled.div`
  background: ${({ theme }) => theme.color.blue};
`;
const ReviewHeaderWrapper = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;
const ReviewHeaderTitle = styled(TextHeader)`
  color: ${({ theme }) => theme.color.white};
  width: 25rem;
  text-align: center;
  margin-bottom: 1rem;
`;
const ReviewHeaderContent = styled(TextContent)`
  color: ${({ theme }) => theme.color.white};
  width: 25rem;
  text-align: center;
`;

const ReviewerWrapper = styled.div`
  min-height: 35vh;
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
  overflow: hidden;
`;

const loop = keyframes`
  0% {
    transform: translate(100%);
  }
  100% {
    transform: translate(-100%);
  }
`;
const Reviewer = styled.div`
  background: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  min-width: 25vw;

  padding: 2% 3%;
  transform: translate(100%);

  animation: ${loop} 15s infinite alternate linear;

  & + & {
    margin-left: 1%;
  }
`;
const ReviewerImageWrapper = styled.div`
  margin-bottom: 1rem;
`;
const ReviewerImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
`;
const ReviewerContent = styled(TextContent)`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  margin-bottom: 1rem;
`;
const ReviewerName = styled(TextContent)`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;
const ReviewerCompany = styled(TextContent)`
  color: ${({ theme }) => theme.color.grey};
  font-size: 0.8rem;
`;

const Review = ({ data }) => {
  return (
    <ReviewContainer>
      <ReviewHeaderWrapper>
        <ReviewHeaderTitle>
          We Are Loved By Users And Clients Worldwide
        </ReviewHeaderTitle>
        <ReviewHeaderContent>
          only those who risk going too far can possibly find out how far one
          can go.
        </ReviewHeaderContent>
      </ReviewHeaderWrapper>
      <ReviewerWrapper>
        {data.map((elem, i) => (
          <Reviewer key={i}>
            <ReviewerImageWrapper>
              <ReviewerImage src={elem.image} alt="" />
            </ReviewerImageWrapper>
            <ReviewerContent>{elem.content}</ReviewerContent>
            <ReviewerName>{elem.name}</ReviewerName>
            <ReviewerCompany>
              {elem.job} @{elem.company}
            </ReviewerCompany>
          </Reviewer>
        ))}
      </ReviewerWrapper>
    </ReviewContainer>
  );
};

export default Review;
