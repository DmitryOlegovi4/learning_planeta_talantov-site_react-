import React,{Component} from "react";
import './Item.css';

class Item extends Component{
    constructor(props) {
        super(props);
        let randColor = () => Math.round(Math.random()*255);
        this.style = {
            backgroundColor: `rgb(${randColor()},${randColor()},${randColor()})`
        }
    }

    render() {
        return(
            <div className='item' style={this.style}>

            </div>
        )
    }
}

export default Item;