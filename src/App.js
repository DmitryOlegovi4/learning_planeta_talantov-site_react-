import React from 'react';
import './App.css';
import ImportantNews from './01homePage/01importantNews/ImportantNews'
import HeaderSection from "./01homePage/02headerSection/HeaderSection";
import Nav from "./01homePage/03nav/Nav";
import TwoSlidersFestivals from "./01homePage/04TwoSlidersFestivals/TwoSlidersFestivals";
import GetFestForm from "./01homePage/05getFestForm/GetFestForm";
import MenuAndMiniNews from "./01homePage/06MenuAndMiniNews/MenuAndMiniNews";
import Wrapper from "./Wrapper";


function App() {
  return (
    <div className="App">
      <ImportantNews/>
      <HeaderSection/>
      <Nav/>
      <TwoSlidersFestivals/>
      <GetFestForm/>
      <MenuAndMiniNews/>
      <hr/>
      <br/>
      <Wrapper/>

    </div>
  );
}

export default App;
