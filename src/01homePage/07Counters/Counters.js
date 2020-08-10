import React,{Component} from "react";
import './Counters.css';
import {DataCounters} from './DataCounters';
import CountersElem from "./CountersElem";

class Counters extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: DataCounters.data
        }
    }

    render(){
        return(
            <div className="Counters">
                <div className="CountersFirstContainer">
                    <CountersElem elem={this.state.data[0]}/>
                    <CountersElem elem={this.state.data[1]}/>
                    <CountersElem elem={this.state.data[2]}/>
                </div>
                <div className="CountersSecondContainer">
                    <CountersElem elem={this.state.data[3]}/>
                    <CountersElem elem={this.state.data[4]}/>
                    <CountersElem elem={this.state.data[5]}/>
                </div>
            </div>
        )
    }

}
export default Counters;