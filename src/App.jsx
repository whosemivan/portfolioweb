import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import FirstScreen from "./components/FirstScreen";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import NotFound from "./components/NotFound";
import Experience from "./components/Experience";
import Education from "./components/Education";
import AllCerts from "./components/AllCerts";
import ScrollToTop from "./ScrollToTop";

import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import browserHistory from "./browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path='/'>
          <ScrollToTop />
          <Header active="main" />
          <FirstScreen />
          <Portfolio />
          <ContactMe />
          <Footer />
        </Route>
        <Route exact path='/about'>
          <ScrollToTop />
          <Header active="about" />
          <AboutMe />
          <Skills />
          <Experience />
          <Education />
          <ContactMe />
          <Footer />
        </Route>
        <Route exact path='/all-certificates'>
          <ScrollToTop />
          <Header />
          <AllCerts />
          <ContactMe />
          <Footer />
        </Route>
        <Route>
          <Header />
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;