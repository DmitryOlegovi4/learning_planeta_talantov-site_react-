import React,{Component} from "react";
import './Сontest.css';

class Contest extends Component{
    constructor({elem}) {
        super();
        this.state = {
            city: elem.city,
            title: elem.title,
            date: elem.date
        }
        this.style = {
            width: window.innerWidth+'px',
            paddingLeft: window.innerWidth*0.55+'px'
        }
    }

    render() {
        return(
            <div className='contest' style={this.style}>
                <p className='city'>г.{this.state.city}</p>
                <h1>Международный конкурс <br/> &laquo;{this.state.title}&raquo;</h1>
                <p className='date'>{this.state.date}</p>
                <div className='detailed'><p>ПОДРОБНЕЕ &#10132;</p></div>
            </div>
        )
    }
}

export default Contest;