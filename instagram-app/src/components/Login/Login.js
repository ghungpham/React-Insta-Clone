import React from 'react';
import './Login.css';

class Login extends React.Component{
    constructor(){
        super();
        this.state ={
            username: "",
            password: ""
        }
    }

    handlerChange = event => {  
        this.setState({[event.target.name] : event.target.value })
    }

    login = event => {
        event.preventDefault();
        localStorage.setItem('username', 'hungpham');
        window.location.reload();
    }
    

    render(){
        return(
          <div className = "loginpage">
            <form onSubmit={this.login}>
            <div className= "username">
            <h8>Username:</h8>
            <input 
            type = "text" 
            name = "username"
            value = {this.state.username}
            onChange = {this.handlerChange}
            />
            </div>
            <div className="password">
            <h8> Password:</h8>
            <input 
            type = "password" 
            name = "password"
            value = {this.state.password}
            onChange = {this.handlerChange}
            />
            </div>
            <button>Log in</button>
            </form>

          </div>

        )
    }
}

export default Login;