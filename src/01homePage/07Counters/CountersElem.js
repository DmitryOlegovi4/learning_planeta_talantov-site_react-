import React, {Component} from "react";
import './Counters.css';

class CountersElem extends Component{
    constructor({elem,props}) {
        super(props);
        this.state = {
            number: elem.number,
            descr: elem.descr,
        }
    }
    render() {
        return(
            <div className="CountersElem">
                <p className="CountersElem_number">{this.state.number}</p>
                <hr/>
                <p className="CountersElem_descr">{this.state.descr}</p>
            </div>
        )
    }
}
export default CountersElem;