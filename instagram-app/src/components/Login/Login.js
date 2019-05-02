import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div `
width : 400px;
margin: 300px auto;
line-height: 2.0rem;
padding: 20px 0;
border: 3px solid lightgray;
text-align : center;
border-radius: 10px;
font-family: 'Open Sans', sans-serif;
`
const Label = styled.h6 `
    margin-right: 20px;
    display: inline;
`
const LoginInput = styled.input `
    background-color: white;
    border: solid 1px lightgray;
    padding: 6px 5px;
    font-size: 0.8rem;
    width: 200px;
    outline: 0;
    color: gray;
    border-radius: 8px;
    display: inline;

`
const Button = styled.button `
margin-top: 20px;
width: 150px
color: white;
font-size: 1rem;
background: darkblue;
border: 0px;
border-radius: 5px;
cursor: pointer;
padding: 8px 8px;  
`



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
        localStorage.setItem('username', this.state.username);
        window.location.reload();
    }
    

    render(){
        return(
          <LoginWrapper>
              <h1>Instaclone</h1>
            <form onSubmit={this.login}>
            <div className= "username">
            <Label>Username:</Label>
            <LoginInput 
            type = "text" 
            name = "username"
            value = {this.state.username}
            onChange = {this.handlerChange}
            />
            </div>
            <div className="password">
            <Label> Password:</Label>
            <LoginInput 
            type = "password" 
            name = "password"
            value = {this.state.password}
            onChange = {this.handlerChange}
            />
            </div>
            <Button>LOG IN</Button>
            </form>

          </LoginWrapper>

        )
    }
}

export default Login;