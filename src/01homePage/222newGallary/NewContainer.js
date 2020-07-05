import React, {Component} from "react";
import './NewGallary.css';
import {data} from './DataNewSlider';
import NewItem from "./NewItem";

class NewContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            slidersToShow: 3,
            slidersToScroll: 3,
            slidersLeft: 0,
            data: data
        }
        this.slidersLength = this.state.data.length;
        this.sliderWidth = window.innerWidth*0.8 / this.state.slidersToShow;
        this.movePosition = this.sliderWidth * this.state.slidersToScroll;
        this.style = {
            minWidth: this.sliderWidth + 'px',
        }

    }
    goRight() {
        this.setState(prev => {
            prev.slidersLeft = this.slidersLength - (Math.abs(prev.position)+prev.slidersToShow*this.sliderWidth) / this.sliderWidth;
            prev.position -= prev.slidersLeft >= prev.slidersToScroll? this.movePosition: prev.slidersLeft*this.sliderWidth ;
            return prev;
        })
    }

    goLeft() {
        this.setState(prev => {
            prev.slidersLeft = Math.abs(prev.position) / this.sliderWidth;
            prev.position += prev.slidersLeft >= prev.slidersToScroll? this.movePosition: prev.slidersLeft*this.sliderWidth;
            return prev;
        })
    }

    render() {
        return(
            <div className="wrapper">
                <div className="slider-container">
                    <div className="sliders-track" style={{ transform: 'translateX('+this.state.position+'px)'}}>
                        {this.state.data.map((elem,i) => <NewItem key={i} elem={elem} minWidth={this.style.minWidth}/>)}
                    </div>
                </div>
                <div className="slider-buttons">
                    <button className="btn-prev" onClick={() => this.goLeft()} disabled = {this.state.position === 0}> &#10096;&#10096;&#10096;&#10096;&#10096; </button>
                    <button className="btn-next" onClick={() => this.goRight()} disabled = {this.state.position <= -(this.slidersLength-this.state.slidersToShow)*this.sliderWidth}> &#10097;&#10097;&#10097;&#10097;&#10097; </button>
                </div>

            </div>
        )
    }
}
export default NewContainer;