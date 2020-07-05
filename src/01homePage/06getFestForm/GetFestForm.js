import React,{Component} from "react";
import './GetFestForm.css'

class GetFestForm extends Component{

    onSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <form className="GetFestForm" onSubmit={this.onSubmit}>
                <div>
                    <h2>Хотите получить <br/>полный график фестивалей?</h2>
                    <p>Заполните форму и мы вышлем график Вам на почту!</p>
                </div>
                <input type="text" placeholder='Введите Ваш E-mail'/>
                <button>ПОЛУЧИТЬ ГРАФИК</button>
            </form>
        )
    }

}
export default GetFestForm;