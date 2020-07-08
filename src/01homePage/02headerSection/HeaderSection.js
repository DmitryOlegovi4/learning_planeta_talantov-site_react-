import React,{Component} from "react";
import './HeaderSection.css'
import SliderHeader from "./SliderHeader";

class HeaderSection extends Component{
    render(){
        return(
            <div className="headerSection">
                <div className='logo-phone'>
                    <a href="/"><div className='logo'>
                        <div className='logoElem'>
                            <img src="./logo.png" alt="logo"/>
                            <p>ПЛАНЕТА <br/>ТАЛАНТОВ</p>
                        </div>
                        <div className='fond'>Фонд<br/> поддержки и развития<br/> детского творчества</div>
                    </div></a>
                    <div className='phone'>
                        <h3>8 (800) 100-07-09</h3>
                        <p>ЗВОНОК ПО РОССИИ<br/> БЕСПЛАТНЫЙ</p>
                    </div>
                </div>
                <SliderHeader/>
            </div>
        )
    }

}
export default HeaderSection;