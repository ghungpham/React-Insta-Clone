import React from 'react';
import './CommentSection.css';
// import moment from "moment";

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comment: ""
        };
    }
    
    onUpdate = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addComment(this.state.comment,this.props.index);
        this.setState({comment: ""})
        } 

    render(){
        console.log(this.props.post)
    return (
        <div>
        <div className = "posticons"><i className="far fa-heart"></i>
        <i className="far fa-comment" data-fa-transform="flip-v"></i>
        </div>
        <h6>{this.props.post.likes} likes</h6>
        <div className="commentscontainer">
        {this.props.post.comments.map((comment,index) => (
            <div className="comments" key={index}>
            <h6>{comment.username}</h6>
            <p>{comment.text}</p>
            </div>
        ))}
        </div>
        <div className="input">
        <form onSubmit = {this.handleSubmit} >
        <input
            type= "text"
            name= "comment"
            id= "new-comment"
            placeholder = "Add a comment... "
            value={this.state.comment}
            onChange={this.onUpdate}
        />
        </form>
        </div>
        </div>
    )
}}

export default CommentSection;