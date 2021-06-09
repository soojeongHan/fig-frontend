import styled from "styled-components";
import Theme from "../Theme/Theme";

const TextHeader = styled.div`
  color: ${(props) => Theme.color[props.theme.color]};

  font-size: 2rem;
  font-weight: bolder;
  line-height: 2.5rem;
`;

const TextContent = styled.p.attrs((props) => ({
  color: Theme.color[props.theme.color] || "#000",
  fontWeight: Theme.fontWeight[props.theme.fontWeight] || "normal",
}))`
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};

  font-size: 0.9rem;
  line-height: 1.5rem;
`;

export { TextHeader, TextContent };
