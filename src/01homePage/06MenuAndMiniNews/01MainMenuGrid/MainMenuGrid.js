import React,{Component} from "react";
import './MainMenuGrid.css';
import {DataMainMenuGrid} from './DataMainMenuGrid';
import MainMenuElemGrid from "./MainMenuElemGrid";

class MainMenuGrid extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: DataMainMenuGrid.data
        }
    }

    render(){
        return(
            <div className="MainMenuGrid">
                    <div  className="MainMenuFirstElemGrid MainMenuItem_0"
                          style={{backgroundImage: 'url(./img/MainMenu/calendar.jpg)'}}>
                        <a href="/"><p>Календарь <br/>фестивалей</p></a>
                    </div>

                {this.state.data.map((elem,i) => <MainMenuElemGrid key={i} elem={elem} classItem={'MainMenuItem_'+(i+1)}/>)}

            </div>
        )
    }

}
export default MainMenuGrid;