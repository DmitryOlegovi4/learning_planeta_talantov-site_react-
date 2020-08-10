import React,{Component} from "react";
import './MenuAndMiniNews.css'
import MainMenuGrid from "./01MainMenuGrid/MainMenuGrid";
import MiniNews from "./02MiniNews/MiniNews";

class MenuAndMiniNews extends Component{

    render(){
        return(
            <div className="MenuAndMiniNews">
                <MainMenuGrid/>
                <MiniNews/>
            </div>
        )
    }

}
export default MenuAndMiniNews;