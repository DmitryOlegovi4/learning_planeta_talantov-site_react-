import React, {Component} from "react";
import './NewGallary.css';

class NewItem extends Component{
    constructor({elem, minWidth}) {
        super();
        this.state = {
            link: elem.link
        }
        this.style = {
            minWidth: minWidth
        }

    }
    render() {
        return(
            <div className="slider" style={{ minWidth: this.style.minWidth}}>
                <img src={this.state.link} alt="picture" className='sliderImg'/>
            </div>
        )
    }
}
export default NewItem;