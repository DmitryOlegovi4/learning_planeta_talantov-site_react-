import React, {Component} from "react";
import {DataSlider} from './DataSlider';
import './SliderHeader.css';
import SliderHeaderItem from "./SliderHeaderItem";

class SliderHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contests: DataSlider.data,
            frameNumber: 0,
            left: 0
        }
        this.elemCount = this.state.contests.length;
        this.style = {
            width: this.elemCount * window.innerWidth + 'px',
            top: 0
        }
    }
    goRight() {
        this.setState(prev => {
            prev.frameNumber -= 1;
            if(prev.frameNumber < -this.elemCount+1){prev.frameNumber=0}
            prev.left = prev.frameNumber * window.innerWidth + 'px';
            return prev;
        })
    }

    goLeft() {
        this.setState(prev => {
            prev.frameNumber += 1;
            if(prev.frameNumber >0){prev.frameNumber=-this.elemCount+1}
            prev.left = prev.frameNumber * window.innerWidth + 'px';
            return prev;
        })
    }
    goToElem(i){
        this.setState(prev => {
            prev.frameNumber = -i;
            prev.left = prev.frameNumber * window.innerWidth + 'px';
            return prev;
        })
    }

    render() {
        const {left} = this.state;

        return(
            <div className="screen">
                <div className="slide">
                    <div className='container' style={{...this.style, left}}>
                        {this.state.contests.map((elem,i) => <SliderHeaderItem key={i} elem={elem}/>)}
                    </div>
                </div>
                <ul className="section-circle">
                    {this.state.contests.map((elem,i) => <li className={"circle"+(this.state.frameNumber===-i ? " active" : "")} key={i} onClick={() => this.goToElem(i)}/>)}
                </ul>
                <div className="btnSlide btnLeft" onClick={() => this.goLeft()}> <p>&#10132;</p> </div>
                <div className="btnSlide btnRight" onClick={() => this.goRight()}> <p>&#10132;</p> </div>
            </div>
        )
    }
}
export default SliderHeader;
