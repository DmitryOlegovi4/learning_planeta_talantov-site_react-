import React, {Component} from "react";
import './FestivalsSlider.css';

class FestItem extends Component{
    constructor({elem, minWidth, slidersToShow, props}) {
        super(props);
        this.state = {
            city: elem.city,
            title: elem.title,
            date: elem.date,
            url: elem.url,
            minWidth: minWidth
        }
        this.style = {
            backgroundImage: 'url('+this.state.url+')'
        }
        this.slidersToShow = slidersToShow;
        window.addEventListener('resize', ()=>{
            this.setState((prev)=>{
                prev.minWidth = (window.innerWidth-260) /this.slidersToShow;
                return prev
            })
        })
    }
    render() {
        return(
            <div className="slider" style={{backgroundImage: 'linear-gradient(0deg, #393838, #3e3e3e), '+ this.style.backgroundImage, minWidth: this.state.minWidth  + 'px'}}>
                <div className='slider_header'>
                    <p className='slider_header_title'>&laquo;{this.state.title}&raquo;</p>
                    <p className='slider_header_city'>{this.state.city}</p>
                    <p className='slider_header_date'>{this.state.date}</p>
                </div>
                <div className='slider_content'>
                    <div>
                        <p><a href="/">Положение</a></p>
                        <p><a href="/">Программа фестиваля</a></p>
                        <p><a href="/">Место проведения</a></p>
                    </div>
                    <div className='giveForm_text2'>
                        <p><a href="/">ПОДАТЬ ЗАЯВКУ</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default FestItem;