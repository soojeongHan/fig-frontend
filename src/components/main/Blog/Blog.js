import React from "react";
import styled, { css } from "styled-components";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image7,
  image9,
  image10,
} from "../../../image/index";
import { TextHeader, TextContent } from "../../common/Text/Text";
import { up, down, left, right } from "../../../styles/Keyframes";

const BlogContainer = styled.div`
  background: ${({ theme }) => theme.color.lightGrey};
  padding: 3rem;
`;
const BlogHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;
`;
const BlogSubject = styled(TextHeader)`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.yellow};
  font-weight: bolder;
  margin-bottom: 1rem;
`;
const BlogHeaderText = styled(TextContent)`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: bolder;
`;
const BlogContents = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const BlogPostWrapper = styled.div`
  box-sizing: border-box;
  &:nth-child(1) {
    width: 40%;
    padding-right: 10px;
    padding-bottom: 10px;
    ${(props) =>
      props.visible &&
      css`
        animation: ${down} 0.7s;
      `}
  }
  &:nth-child(2) {
    width: 60%;
    padding-left: 10px;
    padding-bottom: 10px;
    ${(props) =>
      props.visible &&
      css`
        animation: ${left} 0.7s;
      `}
  }
  &:nth-child(3) {
    width: 60%;
    padding-top: 10px;
    padding-right: 10px;
    ${(props) =>
      props.visible &&
      css`
        animation: ${right} 0.7s;
      `}
  }
  &:nth-child(4) {
    width: 40%;
    padding-left: 10px;
    padding-top: 10px;
    ${(props) =>
      props.visible &&
      css`
        animation: ${up} 0.7s;
      `}
  }
`;
const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  background: ${(props) => `url(${props.background})`};
  background-position: center;
  background-size: cover;
  padding: 2rem;
  padding-right: 20%;
  border-radius: 10px;
`;
const BlogPostInfo = styled.div``;
const BlogPostHeader = styled(TextContent)`
  font-size: 1.1rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 1rem;
`;
const BlogPostContent = styled(TextContent)`
  color: ${({ theme }) => theme.color.white};
`;
const BlogWriter = styled.div`
  display: flex;
`;
const BlogWriterImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
const BlogWriterInfo = styled.div``;
const BlogWriterName = styled(TextContent)`
  font-weight: bolder;
  color: ${({ theme }) => theme.color.white};
`;
const BlogPostDate = styled(TextContent)`
  color: ${({ theme }) => theme.color.white};
`;

const Blog = ({ visible, target }) => {
  const DUMMY_DATA = [
    {
      subject: "Why Design Systems Are Going To Shape The Internet",
      content:
        "Having worked across a number of different industries in my career before...",
      writer: "Benedikt Safiyulin",
      image: image1,
      background: image10,
      date: "Sep 9 - 8 min read",
    },
    {
      subject:
        "Here's What Developers Want Designers To Know About Developers Handoff",
      content:
        "Having worked across a number of different industries in my career before...",
      writer: "Martin Abasto",
      image: image2,
      background: image9,
      date: "Sep 9 - 8 min read",
    },
    {
      subject:
        "Here's What Developers Want Designers To Know About Developers Handoff",
      content:
        "Having worked across a number of different industries in my career before...",
      writer: "Barbara Cotilla",
      image: image4,
      background: image3,
      date: "Sep 9 - 8 min read",
    },
    {
      subject: "We Need To Talk About The Plague of Designer's Insecurity",
      content:
        "Having worked across a number of different industries in my career before...",
      writer: "Beatriz Brito",
      image: image7,
      background: image5,
      date: "Sep 9 - 8 min read",
    },
  ];

  return (
    <BlogContainer ref={target}>
      <BlogHeader>
        <BlogSubject>BLOG</BlogSubject>
        <BlogHeaderText>
          Live Today, Tomorrow <br />
          Will Cost More
        </BlogHeaderText>
      </BlogHeader>
      <BlogContents>
        {DUMMY_DATA.map((elem, i) => (
          <BlogPostWrapper visible={visible} key={i}>
            <BlogPost background={elem.background}>
              <BlogPostInfo>
                <BlogPostHeader>{elem.subject}</BlogPostHeader>
                <BlogPostContent>{elem.content}</BlogPostContent>
              </BlogPostInfo>
              <BlogWriter>
                <BlogWriterImage src={elem.image} alt="" />
                <BlogWriterInfo>
                  <BlogWriterName>{elem.writer}</BlogWriterName>
                  <BlogPostDate>{elem.date}</BlogPostDate>
                </BlogWriterInfo>
              </BlogWriter>
            </BlogPost>
          </BlogPostWrapper>
        ))}
      </BlogContents>
    </BlogContainer>
  );
};

export default Blog;
