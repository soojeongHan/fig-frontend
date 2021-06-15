import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import GlobalFont from "./styles/GlobalFont";
import theme from "./styles/Theme";
import HeaderContainer from "./containers/header/HeaderContainer";
import MarketContainer from "./containers/main/MarketContainer";
import ReviewContainer from "./containers/main/ReviewContainer";
import BrandsContainer from "./containers/main/BrandsContainer";
import PartnersContainer from "./containers/main/PartnersContainer";
import Team from "./components/main/Team";
import BlogContainer from "./containers/main/BlogContainer";
import Portfolio from "./components/main/Portfolio";
import ECommerceContainer from "./containers/main/ECommerceContainer";
import Footer from "./components/Footer";
import Main from "./components/main/Main";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <GlobalFont />
      <ThemeProvider theme={theme}>
        <HeaderContainer />
        <Main>
          <MarketContainer />
          <ReviewContainer />
          <BrandsContainer />
          <PartnersContainer />
          <Team />
          <BlogContainer />
          <Portfolio />
          <ECommerceContainer />
        </Main>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
