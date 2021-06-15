import styled from "styled-components";

const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  font-weight: bolder;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
`;

export default Button;
