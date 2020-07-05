import React, {Component} from "react";
import './BackgroundDiv.css';
import HeaderSection from "../02headerSection/HeaderSection";
import Nav from "../03nav/Nav";
import CurrentFestivalsSlider from "../04currentFestivalsSlider/CurrentFestivalsSlider";

class BackgroundDiv extends Component{
    constructor() {
        super();
    }
    render() {
        return(
            <div className='BackgroundDiv'>
                <HeaderSection/>
                <Nav/>
                <CurrentFestivalsSlider/>
            </div>
        )
    }
}
export default BackgroundDiv;