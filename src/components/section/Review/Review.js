import React from "react";
import styled from "styled-components";
import { image1, image2, image4, image7, image } from "../../../image/index.js";
import { TextHeader, TextContent } from "../../common/Text/Text";

const ReviewContainer = styled.div`
  background: #4d66ff;
`;
const ReviewHeaderWrapper = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;
const ReviewHeaderTitle = styled(TextHeader)`
  width: 25rem;
  text-align: center;
  margin-bottom: 1rem;
`;
const ReviewHeaderContent = styled(TextContent)`
  width: 25rem;
  text-align: center;
`;

const ReviewerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
  overflow-x: hidden;
`;
const Reviewer = styled.div`
  background: #fff;
  border-radius: 10px;
  min-width: 20rem;
  padding: 1.5rem;
  & + & {
    margin-left: 1rem;
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
  font-size: 1rem;
  margin-bottom: 1rem;
`;
const ReviewerName = styled(TextContent)`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;
const ReviewerCompany = styled(TextContent)`
  font-size: 0.8rem;
`;

const Review = () => {
  const DummyData = [
    {
      name: "Artem Sazonov",
      company: "Apex",
      job: "Product Designer",
      content:
        "It's not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go",
      image: image1,
    },
    {
      name: "Pin Jung-Eum",
      company: "Apex",
      job: "Product Designer",
      content:
        "It's not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go",
      image: image2,
    },
    {
      name: "Yao Yi",
      company: "Apex",
      job: "Product Designer",
      content:
        "It's not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go",
      image: image4,
    },
    {
      name: "DUMMY HUMAN1",
      company: "Apex",
      job: "Product Designer",
      content:
        "It's not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go",
      image: image7,
    },
    {
      name: "DUMMY HUMAN2",
      company: "Apex",
      job: "Product Designer",
      content:
        "It's not only about what you write but how you present it. Only those who risk going too far can possibly find out how far one can go",
      image: image,
    },
  ];

  return (
    <ReviewContainer>
      <ReviewHeaderWrapper>
        <ReviewHeaderTitle theme={{ color: "white" }}>
          We Are Loved By Users And Clients Worldwide
        </ReviewHeaderTitle>
        <ReviewHeaderContent theme={{ color: "white" }}>
          only those who risk going too far can possibly find out how far one
          can go.
        </ReviewHeaderContent>
      </ReviewHeaderWrapper>
      <ReviewerWrapper>
        {DummyData.map((elem, i) => (
          <Reviewer key={i}>
            <ReviewerImageWrapper>
              <ReviewerImage src={elem.image} alt="" />
            </ReviewerImageWrapper>
            <ReviewerContent>{elem.content}</ReviewerContent>
            <ReviewerName>{elem.name}</ReviewerName>
            <ReviewerCompany
              theme={{
                color: "grey",
              }}
            >
              {elem.job} @{elem.company}
            </ReviewerCompany>
          </Reviewer>
        ))}
      </ReviewerWrapper>
    </ReviewContainer>
  );
};

export default Review;
