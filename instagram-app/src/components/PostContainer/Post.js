import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return(
        <div className= "eachpost">
        <div className= "postheader">
        <img className= "thumbnail" src={props.post.thumbnailUrl} alt={props.post.username}></img>
        <h6>{props.post.username}</h6>
        </div>
        <img className ="postpic" src={props.post.imageUrl} alt={props.post.timestamp}></img>
        <div className = "postbelow">
        <div className = "posticons"><i className="far fa-heart"></i>
        <i class="far fa-comment" data-fa-transform="flip-v"></i>
        </div>
        <h6>{props.post.likes} likes</h6>
        {props.post.comments.map(comment => (<CommentSection comment={comment} />))}
        <p className= "date">{props.post.timestamp}</p>
        </div>
        </div>
    )
}

export default Post;