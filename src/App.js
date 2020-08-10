import React from 'react';
import './App.css';
import ImportantNews from './01homePage/01importantNews/ImportantNews'
import HeaderSection from "./01homePage/02headerSection/HeaderSection";
import Nav from "./01homePage/03nav/Nav";
import TwoSlidersFestivals from "./01homePage/04TwoSlidersFestivals/TwoSlidersFestivals";
import GetFestForm from "./01homePage/05getFestForm/GetFestForm";
import MenuAndMiniNews from "./01homePage/06MenuAndMiniNews/MenuAndMiniNews";
import Counters from "./01homePage/07Counters/Counters";
import News from "./01homePage/08News/News";
import PartnersSlider from "./01homePage/09PartnersSlider/PartnersSlider";
import InfoFooter from "./01homePage/10InfoFooter/InfoFooter";
import Footer from "./01homePage/11Footer/Footer";
import ArrowUp from "./01homePage/12ArrowUp/ArrowUp";
import ModalWindowNews from "./01homePage/13ModalWindowNews/ModalWindowNews";


function App() {

  return (
    <div className="App">
      <ImportantNews/>
      <HeaderSection/>
      <Nav/>
      <TwoSlidersFestivals/>
      <GetFestForm/>
      <div className='MMCContainer'>
          <MenuAndMiniNews/>
          <Counters/>
          <News/>
      </div>
      <PartnersSlider/>
      <InfoFooter/>
      <Footer/>
      <ArrowUp/>
      <ModalWindowNews/>
    </div>
  );
}

export default App;
