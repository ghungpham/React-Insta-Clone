import React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div `
    padding-bottom: 15px;
    border-bottom: 1px solid lightgray;
    `

const Comments = styled.p `
    margin-top: 10px;
    display: inline;
    margin-right: ${props => props.username? "5px": "0px"} 
    font-weight:  ${props => props.username? "bold": "normal" }  
        `      
const CommentsInput = styled.input `
    margin-top: 10px;
    background-color: white;
    border: 0px;
    padding: 5px 5px;
    font-size: 0.8rem;
    width: 100%;
    outline: 0;
    color: black;
    &::placeholder {
        text-align: left;
        color:  gray;
    }
`
const PostIcons = styled.div `
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    width: 9.5%;
    margin-bottom: 5px;
    font-weight: bold
`
const Likes = styled.h6 `
    font-weight: bold
`

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
        <PostIcons><i className="far fa-heart"></i>
        <i className="far fa-comment" data-fa-transform="flip-v"></i>
        </PostIcons>
        <Likes>{this.props.post.likes} likes</Likes>
       
        <CommentContainer>
        {this.props.post.comments.map((comment,index) => (
            <div key={index}>
            <Comments username>{comment.username}</Comments>
            <Comments>{comment.text}</Comments>
            </div>
        ))}
        </CommentContainer>
        <div>
        <form onSubmit = {this.handleSubmit} >
        <CommentsInput
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