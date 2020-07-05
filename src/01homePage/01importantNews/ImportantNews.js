import React,{Component} from "react";
import './ImportantNews.css'

class ImportantNews extends Component{
    constructor() {
        super();
    }
    render(){
        return(
            <div className="importantNews">
                <p><span>&#9888; &nbsp;</span> Внимание! Важная информация &nbsp;&nbsp; <a href="#">Читать полностью</a></p>
            </div>
        )
    }
}

export default ImportantNews;