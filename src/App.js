import React from 'react';
import './App.css';
import ImportantNews from './01homePage/01importantNews/ImportantNews'
import HeaderSection from "./01homePage/02headerSection/HeaderSection";
import Nav from "./01homePage/03nav/Nav";
import CurrentFestivalsSlider from "./01homePage/04currentFestivalsSlider/CurrentFestivalsSlider";
import NextFestivalsSlider from "./01homePage/05nextFestivalsSlider/NextFestivalsSlider";
import BackgroundDiv from "./01homePage/02-04_DIV/BackgroundDiv";
import GetFestForm from "./01homePage/06getFestForm/GetFestForm";
// import Container from "./01homePage/111gallary/Container";
// import Wrapper from "./Wrapper";
// import NewContainer from "./01homePage/222newGallary/NewContainer";

function App() {
  return (
    <div className="App">
      <ImportantNews/>
      <BackgroundDiv/>
      {/*<HeaderSection/>*/}
      {/*<Nav/>*/}
      {/*<Wrapper/>*/}
      {/*<Container/>*/}
      {/*<NewContainer/>*/}
      {/*<CurrentFestivalsSlider/>*/}
      <NextFestivalsSlider/>
      <GetFestForm/>
    </div>
  );
}

export default App;
