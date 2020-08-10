import React,{Component} from "react";
import './Footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <div>
                    <p>&copy; 2017‒2018 Планета Талантов</p>
                </div>
                <div>
                    <a href="/">Пользовательское соглашение</a>
                    <a href="/">Политика компании в отношении обработки персональных данных</a>
                </div>
            </div>
        )
    }
}

export default Footer;