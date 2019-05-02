import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';

const ComponentfromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component{
  render() {
  return (
    <div className="App">
      <ComponentfromWithAuthenticate />
    </div>
  );
  }}

  

export default App;
