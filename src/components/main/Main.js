import React from "react";
import styled from "styled-components";

const Main = styled.main`
  overflow-x: hidden;
`;

const MainComponent = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainComponent;
