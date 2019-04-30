import React from 'react';
import './CommentSection.css';

const CommentSection= props =>{
    return (
        <div className= "comments">
        <h6>{props.comment.username}</h6>
        <p>{props.comment.text}</p>
        </div>
    )
}

export default CommentSection;