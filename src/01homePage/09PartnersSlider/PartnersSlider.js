import React, {Component} from "react";
import './PartnersSlider.css';
import {DataPartners} from './DataPartners';
import PartnerItem from "./PartnerItem";


class PartnersSlider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            slidersToShow: window.innerWidth > 1200 ? 5: window.innerWidth > 950 ? 4: window.innerWidth > 600 ? 3: 2,
            slidersToScroll: 1,
            slidersLeft: 0,
            data: DataPartners.data,
        }
        this.marginItem = 20;
        this.marginPartners = window.innerWidth > 500 ? 200: 100;
        this.slidersLength = this.state.data.length;
        this.sliderWidth = (window.innerWidth-(this.marginPartners+this.state.slidersToShow*this.marginItem) )/ this.state.slidersToShow;
        this.movePosition = (this.sliderWidth+this.marginItem) * this.state.slidersToScroll;
    }
    goRight() {
        this.setState(prev => {
            prev.slidersLeft = this.slidersLength - (Math.abs(prev.position)+prev.slidersToShow*(this.sliderWidth+this.marginItem)) / (this.sliderWidth+this.marginItem);
            prev.position -= prev.slidersLeft >= prev.slidersToScroll? this.movePosition: prev.slidersLeft*(this.sliderWidth+this.marginItem);
            return prev;
        })
    }

    goLeft() {
        this.setState(prev => {
            prev.slidersLeft = Math.abs(prev.position) / (this.sliderWidth+this.marginItem);
            prev.position += prev.slidersLeft >= prev.slidersToScroll? this.movePosition: prev.slidersLeft*(this.sliderWidth+this.marginItem);
            return prev;
        })
    }

    render() {
        return(
            <div className="wrapperSliderPartners">
                <div className='titleTextPartners'><p>С нами работают</p></div>
                <div className="sliderPartners-container">
                    <div className="slidersPartners-track" style={{ transform: 'translateX('+this.state.position+'px)'}}>
                        {this.state.data.map((elem,i) => <PartnerItem key={i} elem={elem} minWidth={this.sliderWidth} minHeight={this.sliderWidth} slidersToShow={this.state.slidersToShow}/>)}
                    </div>
                </div>
                {this.slidersLength>this.state.slidersToShow?
                    <div className="sliderPartners-buttons">
                    <button className="btnSliderPartners btn-left" onClick={() => this.goLeft()} disabled = {this.state.position >= 0}> &#10132;</button>
                    <button className="btnSliderPartners btn-right" onClick={() => this.goRight()} disabled = {this.state.position <= -(this.slidersLength-this.state.slidersToShow)*(this.sliderWidth+this.marginItem)}> &#10132;</button>
                    </div>
                    : ""
                }
            </div>
        )
    }
}
export default PartnersSlider;