import React, {Component} from "react";
import './TwoSlidersFestivals.css';
import {CurrentFest} from './01currentFestivalsSlider/DataCurrentFest';
import {NextFest} from './02nextFestivalsSlider/DataNextFest';
import FestivalsSlider from "./FestivalsSlider";

class TwoSlidersFestivals extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataCurrent: CurrentFest.data,
            dataNext: NextFest.data
        }
        this.CurrentTitle = 'Текущие фестивали';
        this.NextTitle = 'Ближайшие фестивали';
    }
    render(){
        return(
            <div className="TwoSlidersFestivals">
                <FestivalsSlider title={this.CurrentTitle} dataFest={this.state.dataCurrent}/>
                <FestivalsSlider title={this.NextTitle} dataFest={this.state.dataNext}/>
            </div>
        )
    }
}
export default TwoSlidersFestivals;