import React, {Component} from "react";
import './MainMenu.css';

class MainMenuElem extends Component{
    constructor({elem, height, props}) {
        super(props);
        this.state = {
            title: elem.title,
            url: elem.url,
        }
        this.style = {
            backgroundImage: 'url('+this.state.url+')',
            height: height + 'px'
        }
    }
    render() {
        return(
            <div className="MainMenuElem"
                 style={{backgroundImage: this.style.backgroundImage + ',linear-gradient(45deg, #393838, black)',
                 height: this.style.height}}>
                <p>
                    {this.state.title}
                </p>
            </div>
        )
    }
}
export default MainMenuElem;