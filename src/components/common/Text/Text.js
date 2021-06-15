import styled from "styled-components";

const TextHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: ${({ theme }) => theme.lineHeight.large};
  font-weight: bolder;
`;

const TextContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
`;

export { TextHeader, TextContent };
