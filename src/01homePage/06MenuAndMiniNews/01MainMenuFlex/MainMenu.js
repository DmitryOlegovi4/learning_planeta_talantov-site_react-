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
        this.height = 400;
    }

    render(){
        return(
            <div className="MainMenu">
                <div className='MainMenuContainer'>
                    <a href="/"><div  className="MainMenuFirstElem"
                          style={{backgroundImage: 'url(./img/MainMenu/calendar.jpg)', height:this.height*0.4+'px'}}>
                        <p>Календарь <br/>фестивалей</p>
                    </div></a>
                    <a href="/"><MainMenuElem elem={this.state.data[0]} height={this.height*0.6}/></a>
                </div>
                <div className='MainMenuContainer'>
                    <a href="/"><MainMenuElem elem={this.state.data[1]} height={this.height*0.6}/></a>
                    <a href="/"><MainMenuElem elem={this.state.data[2]} height={this.height*0.4}/></a>

                </div>
                <div className='MainMenuContainer'>
                    <a href="/"><MainMenuElem elem={this.state.data[3]} height={this.height*0.4}/></a>
                    <a href="/"><MainMenuElem elem={this.state.data[4]} height={this.height*0.6}/></a>
                </div>
                <div className='MainMenuContainer'>
                    <a href="/"><MainMenuElem elem={this.state.data[5]} height={this.height*0.4}/></a>
                </div>
                <div className='MainMenuContainer'>
                    <a href="/"><MainMenuElem elem={this.state.data[6]} height={this.height*0.6}/></a>
                </div>
                <div className='MainMenuContainer'>
                    <a href="/"><MainMenuElem elem={this.state.data[7]} height={this.height*0.4}/></a>
                    <a href="/"><MainMenuElem elem={this.state.data[8]} height={this.height*0.6}/></a>
                </div>
            </div>
        )
    }

}
export default MainMenu;