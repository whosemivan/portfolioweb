import React from "react";
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

import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import browserHistory from "./browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path='/'>
          <Header />
          <FirstScreen />
          <Portfolio />
          <ContactMe />
          <Footer />
        </Route>
        <Route exact path='/about'>
          <Header />
          <AboutMe/>
          <Skills/>
          <Experience/>
          <Education/>
          <ContactMe />
          <Footer />
        </Route>
        <Route>
            <NotFound />
          </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;