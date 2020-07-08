import React,{Component} from "react";
import './MenuAndMiniNews.css'
import MainMenu from "./01MainMenu/MainMenu";

class MenuAndMiniNews extends Component{

    render(){
        return(
            <div className="MenuAndMiniNews">
                <MainMenu/>
            </div>
        )
    }

}
export default MenuAndMiniNews;