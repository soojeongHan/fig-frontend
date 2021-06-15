import React from "react";
import styled, { css } from "styled-components";
import { TextHeader, TextContent } from "../../common/Text/Text";
import { fadeIn } from "../../../styles/Keyframes";

const PartnersContainer = styled.div`
  background: ${({ theme }) => theme.color.white};
  padding: 5rem 0;
`;
const PartnersHeader = styled.div`
  width: 400px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;
`;
const PartnersHeaderSubject = styled(TextHeader)`
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  line-height: ${({ theme }) => theme.lineHeight.xxlarge};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  margin-bottom: 1rem;
`;
const PartnersContent = styled(TextContent)`
  color: ${({ theme }) => theme.color.grey};
`;
const PartnersList = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  padding: 4rem 0;
  box-sizing: border-box;
`;
const Partner = styled.div`
  width: 25vw;
  & + & {
    margin-left: 3rem;
  }
`;
const PartnerImageWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;
const PartnerImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  object-fit: cover;
  ${(props) =>
    props.src &&
    css`
      animation: ${fadeIn} 3s;
    `}
`;
const PartnerButton = styled.div`
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.white};
  width: 20px;
  height: 20px;
  border-radius: 2.5px;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
const PartnerSubject = styled(TextContent)`
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

const Partners = ({ data, target }) => {
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
      <PartnersList ref={target}>
        {data.map((elem, i) => (
          <Partner key={i}>
            <PartnerImageWrapper>
              <PartnerImage
                data-src={elem.image}
                src={elem.src ? elem.src : undefined}
              />
              <PartnerButton />
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
