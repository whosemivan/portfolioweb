import React from "react";
import Header from "./components/Header";
import FirstScreen from "./components/FirstScreen";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <FirstScreen/>
      <Portfolio/>
      <ContactMe/>
      <Footer/>
    </>
  );
};

export default App;