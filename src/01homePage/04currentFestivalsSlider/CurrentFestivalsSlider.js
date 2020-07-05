import React, {Component} from "react";
import './FestivalsSlider.css';
import {CurrentFest} from './DataCurrentFest';
import FestItem from "./FestItem";

class CurrentFestivalsSlider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            slidersToShow: 3,
            slidersToScroll: 3,
            slidersLeft: 0,
            data: CurrentFest.data
        }
        this.slidersLength = this.state.data.length;
        this.sliderWidth = (window.innerWidth*0.8+30) / this.state.slidersToShow;
        this.movePosition = this.sliderWidth * this.state.slidersToScroll;
        this.style = {
            minWidth: this.sliderWidth + 'px',
        }

    }
    goRight() {
        this.setState(prev => {
            prev.slidersLeft = this.slidersLength - (Math.abs(prev.position)+prev.slidersToShow*this.sliderWidth) / this.sliderWidth;
            prev.position -= prev.slidersLeft >= prev.slidersToScroll? this.movePosition+60: prev.slidersLeft*this.sliderWidth+60 ;
            return prev;
        })
    }

    goLeft() {
        this.setState(prev => {
            prev.slidersLeft = Math.abs(prev.position) / this.sliderWidth;
            prev.position += prev.slidersLeft >= prev.slidersToScroll? this.movePosition+60: prev.slidersLeft*this.sliderWidth+60;
            return prev;
        })
    }

    render() {
        return(
            <div className="wrapper">
                <div className='currentText'><p>Текущие фестивали</p></div>
                <div className="slider-container">
                    <div className="sliders-track" style={{ transform: 'translateX('+this.state.position+'px)'}}>
                        {this.state.data.map((elem,i) => <FestItem key={i} elem={elem} minWidth={this.style.minWidth}/>)}
                    </div>
                </div>
                <div className="slider-buttons">
                    <button className="btnSlider btn-prev" onClick={() => this.goLeft()} disabled = {this.state.position === 0}> &#10132;</button>
                    <button className="btnSlider btn-next" onClick={() => this.goRight()} disabled = {this.state.position <= -(this.slidersLength-this.state.slidersToShow)*this.sliderWidth}> &#10132;</button>
                </div>

            </div>
        )
    }
}
export default CurrentFestivalsSlider;