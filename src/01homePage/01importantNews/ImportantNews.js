import React,{Component} from "react";
import './ImportantNews.css'
import AlertInfo from "./AlertInfo";

class ImportantNews extends Component{
    render(){

        return(
            <div className="importantNews">
                <p className="importantNews_elem"><span>&#9888; &nbsp;</span> Внимание! Важная информация &nbsp;&nbsp; <a href="/">Читать полностью</a></p>
                <AlertInfo/>
            </div>
        )
    }
}

export default ImportantNews;