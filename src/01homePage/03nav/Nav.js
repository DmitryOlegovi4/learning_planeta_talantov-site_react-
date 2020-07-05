import React, {Component} from "react";
import './Nav.css'

class Nav extends Component{
    constructor() {
        super();
    }
    render(){
        return(
            <nav className='nav'>
                <a href="#"><div className='giveForm'>
                    <p className='giveForm_text'>ПОДАТЬ ЗАЯВКУ </p>
                    <div className='giveForm_container'>
                        <p className='giveForm_pen'>&#9998;</p>
                    </div>
                </div></a>
                <div className='menu'>
                    <div><a href="#">Календарь фестивалей</a></div>
                    <div><a href="#">Отчёты</a></div>
                    <div><a href="#">Жюри</a></div>
                    <div><a href="#">Наши проекты</a></div>
                </div>
                <a href="#"><div className='personalAccount'>
                    <div className='personalAccount_container'>
                        <p className='personalAccount_user'><i className="fas fa-user"></i></p>
                    </div>
                    <p>Личный кабинет</p>
                </div></a>
            </nav>
        )
    }
}

export default Nav;