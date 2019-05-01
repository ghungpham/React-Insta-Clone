import React from 'react';
import './CommentSection.css';
// import moment from "moment";

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ""
        }
    }
    
    onUpdate = event => {
        let input = event.target.value;
        this.setState({input: input});
        console.log(event.target.value)
        console.log(event.target.name)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addComment(this.state.input,this.props.index);
        this.setState({input: ""})
        console.log(this.state.input)
    } 

    render(){
        console.log(this.props)
    return (
        <div>
        <div className = "posticons"><i className="far fa-heart"></i>
        <i className="far fa-comment" data-fa-transform="flip-v"></i>
        </div>
        <h6>{this.props.post.likes} likes</h6>

        {this.props.post.comments.map((comment,index) => (
            <div className="comments" key={index}>
            <h6>{comment.username}</h6>
            <p>{comment.text}</p>
            </div>
        ))}

        <form onSubmit = {this.handleSubmit} >
        <input
            type= "text"
            name= "comment"
            id= "new-comment"
            value={this.state.input}
            onChange={this.onUpdate}
        />
        </form>
        </div>
    )
}}

export default CommentSection;