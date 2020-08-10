import React, {Component} from 'react';
import API from './AxiosRequest';
import UserCard from "./UserCard";
import './OurTeam.css';
import AddUser from "./AddUser";


class OurTeam extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            visibleAddUser: false
        };
        API.getUsers(result=>this.setUsers(result.data.data));
    }
    setUsers(data){
        this.setState({
            users: data
        })
    }
    addUser = (user) =>{
        this.setState((prev)=>{
            prev.users.push(user);
            return prev
        });
    }
    stopRemoveTeam(e){
        e.stopPropagation();
    }
    addFormUserToTeam(){
        this.setState({visibleAddUser: true })
    }
    removeFormUserToTeam(){
        this.setState({visibleAddUser: false })
    }
    render(){
        const data = this.state.users;
        if (data){
            return(
                <div className='OurTeamElem' onClick={this.stopRemoveTeam}>
                    <h2>Наша команда</h2>
                    <div className='UserCardWrapper'>
                        {data.map((item, i)=><UserCard key={i} user={item}/>)}
                        <div className='UserCard AddElem'  onClick={this.addFormUserToTeam.bind(this)}>
                            <h4>Проверь как ты будешь смотреться в нашей команде!</h4>
                            <img alt='AddUser' src='./img/addUser.png'/>
                            <p>Кликни и добавь свои данные</p>
                        </div>

                    </div>
                    {this.state.visibleAddUser ? <div className='AddUserWrapper' onClick={this.removeFormUserToTeam.bind(this)}><AddUser addUser={this.addUser} removeFormUserToTeam={this.removeFormUserToTeam.bind(this)}/></div>: ''}
                </div>
            )}else{
            return (
                <div>

                </div>
            )
        }
    }
}

export default OurTeam;