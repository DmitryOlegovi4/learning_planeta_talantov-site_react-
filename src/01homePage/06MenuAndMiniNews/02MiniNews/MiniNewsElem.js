import React, {Component} from "react";
import './MiniNews.css';

class MiniNewsElem extends Component{
    constructor({elem, props}) {
        super(props);
        this.state = {
            city: elem.city,
            title: elem.title,
            descr: elem.descr
        }
    }
    render() {
        return(
            <div className="MiniNewsElem">
                <p className="MiniNewsElem_city"><i className="fas fa-map-marker-alt"></i> г. {this.state.city}</p>
                <h4 className="MiniNewsElem_title">{this.state.title}</h4>
                <p className="MiniNewsElem_descr">{this.state.descr}</p>
                <a href="/" className="MiniNewsElem_link">ЧИТАТЬ ПОЛНОСТЬЮ</a>
            </div>
        )
    }
}
export default MiniNewsElem;