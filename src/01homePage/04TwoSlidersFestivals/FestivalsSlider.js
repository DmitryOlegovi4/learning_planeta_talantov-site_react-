import React, {Component} from "react";
import './FestivalsSlider.css';
import FestItem from "./FestItem";

class FestivalsSlider extends Component{
    constructor({title, dataFest, props}) {
        super(props);
        this.state = {
            position: 0,
            slidersToShow: 3,
            slidersToScroll: 2,
            slidersLeft: 0,
            data: dataFest,
            frameNumber: 0
        }
        this.slidersLength = this.state.data.length;
        this.sliderWidth = (window.innerWidth-260) / this.state.slidersToShow;
        //-260 т.к. margin слева и справа по 100 + ещё у компонента FestItem margin слева и справа по 10, а их 3 шт.
        this.movePosition = (this.sliderWidth+20) * this.state.slidersToScroll; // +20, т.к. у компонента FestItem margin слева и справа по 10
        this.style = {
            minWidth: this.sliderWidth,
        }
        this.title = title;
        this.circleElem = Array(Math.ceil((this.slidersLength-this.state.slidersToShow)/this.state.slidersToScroll)+1).fill('');
    }
    goRight() {
        this.setState(prev => {
            console.log(prev.slidersLeft)
            console.log(prev.position)
            prev.slidersLeft = this.slidersLength - (Math.abs(prev.position)+prev.slidersToShow*(this.sliderWidth+20)) / (this.sliderWidth+20);
            prev.position -= prev.slidersLeft >= prev.slidersToScroll? this.movePosition: prev.slidersLeft*(this.sliderWidth+20);
            if (prev.frameNumber < Math.ceil(this.slidersLength/this.state.slidersToScroll)-1) {prev.frameNumber++}
            console.log(prev.slidersLeft)
            console.log(prev.position)
            return prev;
        })
    }

    goLeft() {
        this.setState(prev => {
            console.log(prev.slidersLeft)
            prev.slidersLeft = Math.abs(prev.position) / (this.sliderWidth+20);
            prev.position += prev.slidersLeft >= prev.slidersToScroll? this.movePosition: prev.slidersLeft*(this.sliderWidth+20);
            if (prev.frameNumber >0) {prev.frameNumber--}
            console.log(prev.slidersLeft)
            console.log(prev.position)

            return prev;
        })
    }
    ChangePosition(index){
        console.log(index)
        this.setState(prev => {
            prev.frameNumber = index;
            prev.slidersLeft = this.slidersLength - (Math.abs(prev.position)+prev.slidersToShow*(this.sliderWidth+20)) / (this.sliderWidth+20);
            prev.position += prev.slidersLeft >= prev.slidersToScroll? this.movePosition: prev.slidersLeft*(this.sliderWidth+20);
            return prev;
        })
    }

    render() {
        return(
            <div className="wrapperSlider">
                <div className='currentText'><p>{this.title}</p></div>
                <div className="slider-container">
                    <div className="sliders-track" style={{ transform: 'translateX('+this.state.position+'px)'}}>
                        {this.state.data.map((elem,i) => <FestItem key={i} elem={elem} minWidth={this.style.minWidth} slidersToShow={this.state.slidersToShow}/>)}
                    </div>
                </div>
                {this.slidersLength>this.state.slidersToShow?
                    <div className="slider-buttons">
                    <button className="btnSlider btn-prev" onClick={() => this.goLeft()} disabled = {this.state.position >= 0}> &#10132;</button>
                    <button className="btnSlider btn-next" onClick={() => this.goRight()} disabled = {this.state.position <= -(this.slidersLength-this.state.slidersToShow)*(this.sliderWidth+20)}> &#10132;</button>
                    </div>
                    : ""
                }
                {this.slidersLength>this.state.slidersToShow?
                    <ul className="section-circleFest">
                        {this.circleElem.map((elem,i) => <li className={"circleFest"+(this.state.frameNumber===i ? " active" : "")} key={i} onClick={()=>this.ChangePosition(i)}/>)}
                    </ul>
                    : ""
                }
            </div>
        )
    }
}
export default FestivalsSlider;