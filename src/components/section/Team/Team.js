import React from "react";
import styled from "styled-components";
import { image1, image2, image4, image7, image } from "../../../image/index";
import { TextHeader, TextContent } from "../../common/Text/Text";

const TeamContainer = styled.div`
  background: #f1f1f1;
  padding: 6rem 0;
`;
const TeamHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 6rem;
`;
const TeamHeader = styled(TextHeader)`
  font-size: 2.5rem;
  line-height: 3.5rem;
  text-align: center;
`;
const TeamMembers = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;
const Members = styled.div`
  padding: 1rem;
`;
const MemberImage = styled.img`
  width: 350px;
  height: 450px;
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
            <MemberJob theme={{ color: "blue" }}>{elem.job}</MemberJob>
          </Members>
        ))}
      </TeamMembers>
    </TeamContainer>
  );
};

export default Team;
