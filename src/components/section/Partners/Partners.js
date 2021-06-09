import React from "react";
import styled from "styled-components";
import { TextHeader, TextContent } from "../../common/Text/Text";
import { image3, image5, image9 } from "../../../image/index";

const PartnersContainer = styled.div`
  background: #fff;
  padding: 8rem;
`;
const PartnersHeader = styled.div`
  width: 400px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;
`;
const PartnersHeaderSubject = styled(TextHeader)`
  font-size: 2.5rem;
  font-weight: bolder;
  line-height: 3rem;
  margin-bottom: 1rem;
`;
const PartnersContent = styled(TextContent)`
  color: grey;
`;
const PartnersList = styled.div`
  display: flex;
  justify-content: center;
`;
const Partner = styled.div`
  width: 300px;
  height: 100%;
  & + & {
    margin-left: 2rem;
  }
`;
const PartnerImageWrapper = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
`;
const PartnerImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
const PartnerButton = styled.div`
  background: ${(props) => props.color || "#fff"};
  border: 1px solid ${(props) => props.color || "#fff"};
  width: 20px;
  height: 20px;
  border-radius: 2.5px;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
const PartnerSubject = styled(TextContent)`
  font-weight: bolder;
`;

const Partners = () => {
  const DUMMY_DATA = [
    {
      subject: "Why Design Systems Are Going To Shape The Internet",
      content:
        "Having worked across a number of different industries in my career before...",
      image: image9,
    },
    {
      subject:
        "Here's What Developers Want Designers To Know About Developers Handoff",
      content:
        "Having worked across a number of different industries in my career before...",
      image: image5,
    },
    {
      subject: "We Need To Talk About The Plague of Designer's Insecurity",
      content:
        "Having worked across a number of different industries in my career before...",
      image: image3,
    },
  ];
  return (
    <PartnersContainer>
      <PartnersHeader>
        <PartnersHeaderSubject>
          You Got A Friend In The Business
        </PartnersHeaderSubject>
        <PartnersContent>
          Only those who risk going too far can possibly find out how far one
          can go.
        </PartnersContent>
      </PartnersHeader>
      <PartnersList>
        {DUMMY_DATA.map((elem, i) => (
          <Partner key={i}>
            <PartnerImageWrapper>
              <PartnerImage src={elem.image} alt="" />
              <PartnerButton color={i === 0 ? "#ffa900" : ""} />
            </PartnerImageWrapper>
            <PartnerSubject>{elem.subject}</PartnerSubject>
            <PartnersContent>{elem.content}</PartnersContent>
          </Partner>
        ))}
      </PartnersList>
    </PartnersContainer>
  );
};

export default Partners;
