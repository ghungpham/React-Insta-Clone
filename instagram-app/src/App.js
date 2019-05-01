import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';

const ComponentfromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      isLoggedIn : false
    }
    }
  componentDidMount(){
    if (localStorage.getItem('username')){
      this.setState({isLoggedIn: true})
    } else {this.setState({isLoggedIn:false})}
  }

  render() {
  return (
    <div className="App">
      <ComponentfromWithAuthenticate />
    </div>
  );
  }}

  

export default App;
