import React from "react";
import Homepage from '../components/Homepage/Homepage'
import Menu from '../components/Menu/menu'
import HowItWorks from '../components/How-it-works/How-it-works'
const Home = () => {
  return (
    <>
      <Homepage />
      <HowItWorks />
      <Menu/>
    </>
  );
};

export default Home;
