import React,{Component} from "react";
import './MiniNews.css';
import {DataMiniNews} from './DataMiniNews';
import MiniNewsElem from "./MiniNewsElem";

class MiniNews extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: DataMiniNews.data
        }
    }

    render(){
        return(
            <div className="MiniNews">
                <p className="MiniNews_title">НОВОСТИ</p>
                <div className='MiniNewsElem-GRID'>
                    {this.state.data.map((elem,i) => <MiniNewsElem key={i} elem={elem}/>)}
                </div>
                <p className="MiniNews_link"><a href="/">ЧИТАТЬ ВСЕ НОВОСТИ  &#10132;</a></p>
            </div>
        )
    }

}
export default MiniNews;