import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostContainer = props => {
    return(
        <div className="PostContainer">
        {props.post.map(post => (<Post post={post} key={props.post.timestamp} /> ))}
        </div>
        )
}

export default PostContainer;