import React, {Component} from "react";
import './PartnersSlider.css';

class PartnerItem extends Component{
    constructor({elem, minWidth, minHeight, slidersToShow, props}) {
        super(props);
        this.state = {
            title: elem.title,
            url: elem.url,
            minWidth: minWidth,
            minHeight: minHeight,
            slidersToShow: slidersToShow,
            marginPartners: window.innerWidth > 500 ? 200: 100
        }
        window.addEventListener('resize', ()=>{
            this.setState((prev)=>{
                prev.marginPartners =  window.innerWidth > 500 ? 200: 100;
                prev.slidersToShow =  window.innerWidth > 1200 ? 5: window.innerWidth > 950 ? 4: window.innerWidth > 600 ? 3: 2;
                prev.minWidth =  (window.innerWidth-(prev.marginPartners+prev.slidersToShow*20) )/ prev.slidersToShow;
                prev.minHeight =  prev.minWidth;
                return prev
            })
        })
    }
    render() {
        return(
            <div className="sliderPartner" style={{minWidth: this.state.minWidth  + 'px', minHeight: this.state.minHeight  + 'px'}}>
                <a href="/">
                    <div className="sliderPartner_content">
                        <div className="sliderPartner_div">
                            <img src={this.state.url} alt="img" className="sliderPartner_img"/>
                        </div>
                        <div className="sliderPartner_text">
                            <p>{this.state.title}</p>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}
export default PartnerItem;