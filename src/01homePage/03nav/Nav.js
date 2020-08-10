import React, {Component} from "react";
import './Nav.css'

class Nav extends Component{

    constructor(props) {
        super(props);
        this.state = {
            visibleMenu: false,
            display: ''
        }
        window.addEventListener('resize', ()=>{
            this.setState((prev)=>{
                if (window.innerWidth > 720){
                    prev.display = 'flex'
                } else {
                    if (this.state.visibleMenu === false){
                        prev.display = 'none'
                    } else {
                        prev.display = 'block'
                    }
                }
                return prev
            })
        })
    }
    openMenu(){
        if (this.state.visibleMenu === false){
            this.setState({visibleMenu: true, display: 'block'});
        } else {
            this.setState({visibleMenu: false, display: 'none'});
        }
    }

    render(){
        return(
            <nav className='nav'>
                <a href="/"><div className='giveForm'>
                    <p className='giveForm_text'>ПОДАТЬ ЗАЯВКУ </p>
                    <div className='giveForm_container'>
                        <p className='giveForm_pen'>&#9998;</p>
                    </div>
                </div></a>
                <div className='menu' style={{display: this.state.display}}>
                    <div><a href="/">Календарь фестивалей</a></div>
                    <div><a href="/">Отчёты</a></div>
                    <div><a href="/">Жюри</a></div>
                    <div><a href="/">Наши проекты</a></div>
                </div>
                <a href="/"><div className='personalAccount' style={{display: this.state.display}}>
                    <div className='personalAccount_container'>
                        <p className='personalAccount_user'><i className="fas fa-user"></i></p>
                    </div>
                    <p>Личный кабинет</p>
                </div></a>
                <div className='btnMenu' onClick={this.openMenu.bind(this)}>
                    {this.state.visibleMenu === false ?
                        <p>
                            <i className="fas fa-ellipsis-h"></i>
                        </p>
                        :
                        <p style={{marginLeft: '5px'}}>
                            <i className="fas fa-ellipsis-v"></i>
                        </p>
                    }

                </div>
            </nav>
        )
    }
}

export default Nav;