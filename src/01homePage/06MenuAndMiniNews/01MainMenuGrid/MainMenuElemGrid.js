import React, {Component} from "react";
import './MainMenuGrid.css';

class MainMenuElemGrid extends Component{
    constructor({elem, classItem, props}) {
        super(props);
        this.state = {
            title: elem.title,
            url: elem.url,
        }
        this.style = {
            backgroundImage: 'url('+this.state.url+')',
        }
        this.classItem=classItem;
    }
    render() {
        return(
            <div className={"MainMenuElemGrid " + this.classItem}
                 style={{backgroundImage: this.style.backgroundImage + ',linear-gradient(45deg, #393838, grey)'}}>
                <a href="/"><p>
                    {this.state.title}
                </p></a>
            </div>
        )
    }
}
export default MainMenuElemGrid;