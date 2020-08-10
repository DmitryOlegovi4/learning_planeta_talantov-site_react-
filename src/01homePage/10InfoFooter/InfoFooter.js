import React, {Component} from "react";
import './InfoFooter.css';
import OurTeam from "../14AxiosAndModalAndAddUserToTeam/OurTeam";

class InfoFooter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visibleTeam: false
        }
    }
    addTeam(){
        this.setState({visibleTeam: true })
    }
    removeTeam(){
        this.setState({visibleTeam: false })
    }
    render() {
        return(
            <div className="InfoFooter" >
                <div className='InfoFooter_content'>
                    <div className='InfoFooter_content_links'>
                        <a href="/">О ФОНДЕ</a>
                        <p onClick={this.addTeam.bind(this)}>НАША КОМАНДА</p>
                        <a href="/">КОНТАКТЫ</a>
                    </div>
                    <div className='InfoFooter_content_phone'>
                        <p>8 (800) 100-07-09</p>
                        <p>ЗВОНОК ПО РОССИИ<br/>БЕСПЛАТНЫЙ</p>
                    </div>
                </div>
                <div className='InfoFooter_sections'>
                    <div className='InfoFooter_sections_links'>
                        <a href="/">Какой-то раздел</a>
                        <a href="/">Какой-то другой</a>
                        <a href="/">раздел</a>
                    </div>
                    <div className='InfoFooter_sections_links'>
                        <a href="/">Какой-то раздел</a>
                        <a href="/">Какой-то другой</a>
                        <a href="/">раздел</a>
                    </div>
                    <div className='InfoFooter_sections_links'>
                        <a href="/">Какой-то раздел</a>
                        <a href="/">Какой-то другой</a>
                        <a href="/">раздел</a>
                    </div>
                </div>
                {this.state.visibleTeam? <div className='OurTeamWrapper' onClick={this.removeTeam.bind(this)}><OurTeam/></div>: ''}
            </div>
        )
    }
}
export default InfoFooter;