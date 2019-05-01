import React from 'react';
import './../../App.css';
import dummyData from './../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from './../SearchBar/SearchBar';

class Postspage extends React.Component{
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.setState({
      data: dummyData
    })
  }

addComment = (comment,index) =>{
  let newComment = [...this.state.data]
  newComment[index].comments = [...newComment, {username:'hungpham', text: comment, id: Date.now()}]
this.setState({
  data: newComment
})
}


  render(){
  return (
    <div className="App">
      <SearchBar />
      <PostContainer post={this.state.data} addComment={this.addComment} />
    </div>
  );
  }
}

export default Postspage;