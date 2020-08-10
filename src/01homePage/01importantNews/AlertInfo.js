import React,{Component} from "react";
import './AlertInfo.css'

class AlertInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            info: ' disabledInfo',
            visibleInfo: true}
    }
    alertLocalStorage(){
        if(localStorage.getItem('alert-info')==='false'){
            localStorage.setItem('alert-info',true);
            this.setState({info:'', visibleInfo: true});
        } else{
            localStorage.setItem('alert-info',false);
            this.setState({info:' disabledInfo'});
        }
    }
    closeInfo(){
        this.setState({visibleInfo: false});
    }
    stopRemoveInfo(e){
        e.stopPropagation();
    }
    render(){
        if (!localStorage.getItem('alert-info')){localStorage.setItem('alert-info', true);}
        return(
            <div>
                <div className={localStorage.getItem('alert-info')==='false'?"alert-info"+this.state.info:"alert-info"} onClick={this.alertLocalStorage.bind(this)}>
                    <p>&#8505;</p>
                </div>
                {localStorage.getItem('alert-info') === 'true' && this.state.visibleInfo === true ?
                    <div className='infoContainer' onClick={this.closeInfo.bind(this)}>
                        <div className='infoElem' onClick={this.stopRemoveInfo}>
                            <h2>Информация о сайте</h2>
                            <p>Данный сайт является выпускным проектом frontend части в <br/>
                                МЕЖДУНАРОДНОЙ ВЫСШЕЙ ШКОЛЕ IT И КИБЕРБЕЗОПАСНОСТИ <a href="https://hackeru.pro/">HackerU</a></p>
                            <hr/>
                            <p>
                                Сделан полностью на React.
                            </p>
                            <ul>
                                Здесь реализовано следующее:
                                <li> Асинхронные запросы с помощью axios (данные с сайта https://reqres.in/)</li>
                                <li> Модальные окна</li>
                                <li> Local Storage</li>
                                <li> Галарея/слайдеры двумя разными способами</li>
                                <li> Возможность добавлять новые пункты</li>
                                <li> Адаптивная вёрстка</li>
                            </ul>
                            <hr/>
                            <h3>Неявные функции сайта, сделанные только для демонстрации моих возможностей:</h3>
                            <div>
                                <p>* Данное модальное окно (&laquo;Информация о сайте&raquo;) будет появляться в качестве подсказки каждый раз при перезагрузке. <br/>
                                    (реализовано через localStorage)</p>
                                <p>Отключить данную функфию Вы можете здесь </p>
                                <img src="./img/info_1.jpg" alt="" className='infoElem__img'/>
                            </div>
                            <hr/>
                            <div>
                                <p>** Такие функции как асинхронный запрос, добавление пунктов и модальное окно Вы можете посмотреть снизу сайта, нажав на "Команда"</p>
                                <img src="./img/info_2.jpg" alt="" className='infoElem__img'/>
                            </div>
                            <p className='closeInfo' onClick={this.closeInfo.bind(this)}><i className="fas fa-times"></i></p>
                        </div>
                    </div>
                    :
                    ''}
            </div>
        )
    }
}

export default AlertInfo;