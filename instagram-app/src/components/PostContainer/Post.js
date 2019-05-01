import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import moment from "moment";

const Post = props => {
    return(
        <div className= "eachpost">
        <div className= "postheader">
        <img className= "thumbnail" src={props.post.thumbnailUrl} alt={props.post.username}></img>
        <h6>{props.post.username}</h6>
        </div>
        <img className ="postpic" src={props.post.imageUrl} alt={props.post.timestamp}></img>
        <div className = "postbelow">
        <CommentSection post={props.post} index={props.index} addComment={props.addComment} />
        <p className= "date">{moment(props.post.timestamp).fromNow().toUpperCase()}</p>
        </div>
        </div>
    )
}

export default Post;