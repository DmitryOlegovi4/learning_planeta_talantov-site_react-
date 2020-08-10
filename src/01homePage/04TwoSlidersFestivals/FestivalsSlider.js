import React, {Component} from "react";
import './FestivalsSlider.css';
import FestItem from "./FestItem";

class FestivalsSlider extends Component{
    constructor({title, dataFest, props}) {
        super(props);
        this.state = {
            position: 0,
            slidersToShow: window.innerWidth > 1200 ? 3: window.innerWidth > 720 ? 2: 1,
            slidersToScroll: window.innerWidth > 1200 ? 3: window.innerWidth > 720 ? 2: 1,
            slidersLeft: 0,
            data: dataFest,
            frameNumber: 0
        }
        window.addEventListener('resize', ()=>{
            this.setState((prev)=>{
                if (window.innerWidth > 1200){
                    prev.position = 0;
                    prev.frameNumber = 0;
                    prev.slidersToShow = 3;
                    prev.slidersToScroll = 3;
                    this.sliderWidth = (window.innerWidth-this.marginSlider-this.marginItem*prev.slidersToShow) / prev.slidersToShow;
                    this.movePosition = (this.sliderWidth+this.marginItem) * prev.slidersToScroll;
                    this.circleElem = Array(Math.ceil((this.slidersLength-prev.slidersToShow)/prev.slidersToScroll)+1).fill('');
                } else if (window.innerWidth > 720){
                    prev.position = 0;
                    prev.frameNumber = 0;
                    prev.slidersToShow = 2;
                    prev.slidersToScroll = 2;
                    this.sliderWidth = (window.innerWidth-this.marginSlider-this.marginItem*prev.slidersToShow) / prev.slidersToShow;
                    this.movePosition = (this.sliderWidth+this.marginItem) * prev.slidersToScroll;
                    this.circleElem = Array(Math.ceil((this.slidersLength-prev.slidersToShow)/prev.slidersToScroll)+1).fill('');
                } else if (window.innerWidth > 500){
                    prev.position = 0;
                    prev.frameNumber = 0;
                    prev.slidersToShow = 1;
                    prev.slidersToScroll = 1;
                    this.sliderWidth = (window.innerWidth-this.marginSlider-this.marginItem*prev.slidersToShow) / prev.slidersToShow;
                    this.movePosition = (this.sliderWidth+this.marginItem) * prev.slidersToScroll;
                    this.circleElem = Array(Math.ceil((this.slidersLength-prev.slidersToShow)/prev.slidersToScroll)+1).fill('');
                } else {
                    prev.position = 0;
                    prev.frameNumber = 0;
                    prev.slidersToShow = 1;
                    prev.slidersToScroll = 1;
                    this.marginSlider = 100;
                    this.sliderWidth = (window.innerWidth-this.marginSlider-this.marginItem*prev.slidersToShow) / prev.slidersToShow;
                    this.movePosition = (this.sliderWidth+this.marginItem) * prev.slidersToScroll;
                    this.circleElem = Array(Math.ceil((this.slidersLength-prev.slidersToShow)/prev.slidersToScroll)+1).fill('');
                }
                return prev
            })
        })
        this.marginItem = 20;
        this.marginSlider = window.innerWidth > 500? 200 : 100;
        this.slidersLength = this.state.data.length;
        this.sliderWidth = (window.innerWidth-this.marginSlider-this.marginItem*this.state.slidersToShow) / this.state.slidersToShow;
        //-260 т.к. margin слева и справа по 100 + ещё у компонента FestItem margin слева и справа по 10, а их 3 шт.
        this.movePosition = (this.sliderWidth+this.marginItem) * this.state.slidersToScroll; // +20, т.к. у компонента FestItem margin слева и справа по 10
        this.title = title;
        this.circleElem = Array(Math.ceil((this.slidersLength-this.state.slidersToShow)/this.state.slidersToScroll)+1).fill('');
    }
    goRight() {
        this.setState(prev => {
            prev.slidersLeft = this.slidersLength - (Math.abs(prev.position)+prev.slidersToShow*(this.sliderWidth+this.marginItem)) / (this.sliderWidth+this.marginItem);
            prev.position -= prev.slidersLeft >= prev.slidersToScroll? this.movePosition: prev.slidersLeft*(this.sliderWidth+this.marginItem);
            if (prev.frameNumber < Math.ceil(this.slidersLength/this.state.slidersToScroll)-1) {prev.frameNumber++}
            return prev;
        })
    }
    goLeft() {
        this.setState(prev => {
            prev.slidersLeft = Math.abs(prev.position) / (this.sliderWidth+this.marginItem);
            prev.position += prev.slidersLeft >= prev.slidersToScroll? this.movePosition: prev.slidersLeft*(this.sliderWidth+this.marginItem);
            if (prev.frameNumber >0) {prev.frameNumber--}
            return prev;
        })
    }
    ChangePosition(index){
        this.setState(prev => {
            prev.frameNumber = index;
            if (index === 0){
                prev.slidersLeft = 0;
                prev.position = 0;
            } else {
                prev.slidersLeft = this.slidersLength - prev.slidersToShow - prev.slidersToScroll*(index-1);
                prev.position = prev.slidersLeft >= prev.slidersToScroll? -this.movePosition*index: -this.movePosition*(index-1)+(-prev.slidersLeft*(this.sliderWidth+this.marginItem));
            }
            return prev;
        })
    }

    render() {
        return(
            <div className="wrapperSlider">
                <div className='currentText'><p>{this.title}</p></div>
                <div className="slider-container">
                    <div className="sliders-track" style={{ transform: 'translateX('+this.state.position+'px)'}}>
                        {this.state.data.map((elem,i) => <FestItem key={i} elem={elem} minWidth={this.sliderWidth} slidersToShow={this.state.slidersToShow}/>)}
                    </div>
                </div>
                {this.slidersLength>this.state.slidersToShow?
                    <div className="slider-buttons">
                    <button className="btnSlider btn-prev" onClick={() => this.goLeft()} disabled = {this.state.position >= 0}> &#10132;</button>
                    <button className="btnSlider btn-next" onClick={() => this.goRight()} disabled = {this.state.position <= -(this.slidersLength-this.state.slidersToShow)*(this.sliderWidth+this.marginItem)}> &#10132;</button>
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