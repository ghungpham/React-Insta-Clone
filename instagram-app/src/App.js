import React from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      dummyData
    }
  }

  render(){
  return (
    <div className="App">
      <SearchBar />
      <PostContainer post={this.state.dummyData} />
    </div>
  );
  }
}

export default App;
