import React,{Component} from "react";
import './AddUser.css';

class UserUpdate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            avatar: ''
        }
    }
    onChangeState(event, type){
        const value = event.target.value;
        this.setState(prev=>{
            prev[type] = value;
            return prev
        })
    }
    onChangeImage(event){
        const value = event.target.files[0] || '';
        let blobURL;
        value ? blobURL = URL.createObjectURL(value): blobURL = '';
        this.setState(prev=>{
            prev.avatar = blobURL;
            return prev
        })
    }
    addUser(event){
        event.preventDefault();
        this.props.addUser(this.state);
        this.props.removeFormUserToTeam();
    }
    stopRemoveAddUser(e){
        e.stopPropagation();
    }

    render() {
        let imageElem ='';
        if(this.state.avatar){
            imageElem = <img alt='UserAvatar' src={this.state.avatar} />
        }
        return(
            <div className='AddUserElem' onClick={this.stopRemoveAddUser}>
                <form className='AddUserForm' onSubmit={this.addUser.bind(this)}>
                    <div>
                        <h4>Добавить нового члена команды: </h4>
                        <div>
                            <p>Имя</p>
                            <input onChange={(event)=>this.onChangeState(event, 'first_name')}/>
                        </div>
                        <div>
                            <p>Фамилия</p>
                            <input onChange={(event)=>this.onChangeState(event, 'last_name')}/>
                        </div>
                        <div>
                            <p>E-mail</p>
                            <input onChange={(event)=>this.onChangeState(event, 'email')}/>
                        </div>
                        <div>
                            <p>Фото</p>
                            <input type='file' onChange={(event)=>this.onChangeImage(event)}/>
                        </div>
                        <button>Добавить</button>
                    </div>
                    <div className='AddUser_imageElem'>
                        <p>Предпросмотр фото</p>
                        {imageElem}
                    </div>
                </form>
            </div>

        )
    }
}

export default UserUpdate;