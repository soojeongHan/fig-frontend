import React from "react";
import { createGlobalStyle } from "styled-components";

import font from "./styles/fonts/LibreFranklin-VariableFont_wght.ttf";
import Header from "./components/Header";
import Market from "./components/section/Market";
import Review from "./components/section/Review";
import Brands from "./components/section/Brands";
import Partners from "./components/section/Partners";
import Team from "./components/section/Team";
import Blog from "./components/section/Blog";
import Portfolio from "./components/section/Portfolio";
import ECommerce from "./components/section/ECommerce";
import Footer from "./components/Footer";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Libre Franklin';
    src: url(${font}) format('truetype'),
    url(${font})
  }
  body {
    font-family: 'Libre Franklin';
  }
`;

const App = () => {
  return (
    <React.Fragment>
      {/* GLOBAL STYLES */}
      <GlobalStyles />

      {/* COMPONENTS 
        HTML5 시맨틱 태그를 사용한다.
      */}
      <Header />
      <section>
        <Market />
        <Review />
        <Brands />
        <Partners />
        <Team />
        <Blog />
        <Portfolio />
        <ECommerce />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default App;
