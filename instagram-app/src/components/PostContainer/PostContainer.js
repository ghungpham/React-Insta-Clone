import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostContainer = props => {
    return(
        <div className="PostContainer">
        {props.post.map((post,index) => (<Post post={post} index={index} key={post.timestamp} addComment={props.addComment} /> ))}
        </div>
        )
}

export default PostContainer;