import React,{Component} from "react";
import './SliderHeaderItem.css';

class SliderHeaderItem extends Component{
    constructor({elem}) {
        super();
        this.state = {
            city: elem.city,
            title: elem.title,
            date: elem.date,
            width: window.innerWidth,
            paddingLeft: window.innerWidth>950? window.innerWidth*0.55: window.innerWidth>600? window.innerWidth*0.45: window.innerWidth>500? window.innerWidth*0.4: window.innerWidth>350? window.innerWidth*0.3: window.innerWidth*0.2
        }
        window.addEventListener('resize', ()=>{
            this.setState((prev)=>{
                prev.width = window.innerWidth;
                if (prev.width > 950){
                    prev.paddingLeft = window.innerWidth*0.55
                } else if (prev.width > 600) {
                    prev.paddingLeft = window.innerWidth*0.45
                } else if (prev.width > 500) {
                    prev.paddingLeft = window.innerWidth*0.4
                } else if (prev.width > 350) {
                    prev.paddingLeft = window.innerWidth*0.3
                } else {
                    prev.paddingLeft = window.innerWidth*0.2
                }
                return prev
            })
        })
    }

    render() {
        return(
            <div className='contest' style={{width:this.state.width+'px', paddingLeft: this.state.paddingLeft+'px' }}>
                <p className='city'>г.{this.state.city}</p>
                <h1>Международный конкурс <br/> &laquo;{this.state.title}&raquo;</h1>
                <p className='date'>{this.state.date}</p>
                <div className='detailed'><p>ПОДРОБНЕЕ &#10132;</p></div>
            </div>
        )
    }
}

export default SliderHeaderItem;