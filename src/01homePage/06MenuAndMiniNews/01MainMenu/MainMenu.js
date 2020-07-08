import React,{Component} from "react";
import './MainMenu.css';
import {DataMainMenu} from './DataMainMenu';
import MainMenuElem from "./MainMenuElem";

class MainMenu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: DataMainMenu.data
        }
    }

    render(){
        return(
            <div className="MainMenu">
                {this.state.data.map((elem,i) => <MainMenuElem key={i} elem={elem}/>)}
            </div>
        )
    }

}
export default MainMenu;