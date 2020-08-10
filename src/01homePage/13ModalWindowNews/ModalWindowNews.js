import React, {Component} from "react";
import "./ModalWindowNews.css";
import {DataMiniNews} from '../06MenuAndMiniNews/02MiniNews/DataMiniNews';
import MiniNewsElem from "../06MenuAndMiniNews/02MiniNews/MiniNewsElem";


class ModalWindowNews extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: DataMiniNews.data,
            isOpen: true
        }
        window.addEventListener('resize', ()=>{
            console.log(window.innerWidth);
        })

    }
    closeModalWindowNews(){
        this.setState({isOpen:false})
    }

    render() {
        return(
           <div> {
                this.state.isOpen ?
                    <div className='ModalWindowNews'>
                        <p className='modalClose' onClick={this.closeModalWindowNews.bind(this)}>&#10005;</p>
                        <div className='modalTitle'>
                            <img  className='modalTitle_img' src="img/News/modalNews.png" alt=""/>
                            <p>ПОСЛЕДНИЕ НОВОСТИ</p>
                        </div>
                        <MiniNewsElem elem={this.state.data[0]} />
                        <p className='modalAllNews'>
                            ПОКАЗАТЬ ВСЕ НОВОСТИ <br/>
                            <i className="fas fa-chevron-down"></i>
                        </p>
                    </div>
                    :
                    ''
            }</div>

        )
    }
}
export default ModalWindowNews;