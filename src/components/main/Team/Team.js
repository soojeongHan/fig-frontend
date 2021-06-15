import React from "react";
import styled, { keyframes } from "styled-components";
import { image1, image2, image4, image7, image } from "../../../image/index";
import { TextHeader, TextContent } from "../../common/Text/Text";

const TeamContainer = styled.div`
  background: ${({ theme }) => theme.color.lightGrey};
  padding: 6rem 0;
  overflow-x: hidden;
`;
const TeamHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
`;
const TeamHeader = styled(TextHeader)`
  font-size: 2.5rem;
  line-height: 3.5rem;
  text-align: center;
`;
const loop = keyframes`
  0% {
    transform: translate(10%);
  }
  100% {
    transform: translate(-10%);
  }
`;
const TeamMembers = styled.div`
  padding: 2% 3%;
  display: flex;
  justify-content: center;
  transform: translate(10%);

  animation: ${loop} 10s infinite alternate linear;
`;
const Members = styled.div`
  min-width: 20vw;
  height: 50vh;
  padding: 1rem;
`;
const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  margin-bottom: 10px;
  & + & {
    margin-left: 3rem;
  }
`;
const MemberName = styled(TextContent)`
  font-size: 1.1rem;
  font-weight: bolder;
  margin-bottom: 5px;
`;
const MemberJob = styled(TextContent)`
  color: ${({ theme }) => theme.color.blue};
  font-size: 0.9rem;
`;

const Team = () => {
  const DUMMY_DATA = [
    {
      name: "DUMMY HUMAN",
      job: "Senior Developer",
      image: image1,
    },
    {
      name: "Georges Embolo",
      job: "Product Manager",
      image: image2,
    },
    {
      name: "Justine Marshall",
      job: "Senior Developer",
      image: image4,
    },
    {
      name: "Gabriel Soares",
      job: "Product Manager",
      image: image7,
    },
    {
      name: "Edward Lin",
      job: "Marketing Manager",
      image: image,
    },
  ];

  return (
    <TeamContainer>
      <TeamHeaderWrapper>
        <TeamHeader>
          Teamwork Makes <br /> The Dream Work
        </TeamHeader>
      </TeamHeaderWrapper>
      <TeamMembers>
        {DUMMY_DATA.map((elem, i) => (
          <Members key={i}>
            <MemberImage src={elem.image} />
            <MemberName>{elem.name}</MemberName>
            <MemberJob>{elem.job}</MemberJob>
          </Members>
        ))}
      </TeamMembers>
    </TeamContainer>
  );
};

export default Team;
