import React, {Component} from "react";
import './MainMenu.css';

class MainMenuElem extends Component{
    constructor({elem, props}) {
        super(props);
        this.state = {
            title: elem.title,
            url: elem.url,
        }
        this.style = {
            backgroundImage: 'url('+this.state.url+')'
        }
    }
    render() {
        return(
            <div className="MainMenuElem"
                 style={{backgroundImage: 'linear-gradient(0deg, #393838, #ffcd00), '+ this.style.backgroundImage}}>
                <p>
                    {this.state.title}
                </p>
            </div>
        )
    }
}
export default MainMenuElem;