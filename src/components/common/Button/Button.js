import styled from "styled-components";

const StyledButton = styled.button.attrs((props) => ({
  background: props.theme.background || "#fff",
  color: props.theme.color || "#000",
}))`
  background: ${(props) => props.background};
  color: ${(props) => props.color};

  font-weight: bolder;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
`;

export default StyledButton;
