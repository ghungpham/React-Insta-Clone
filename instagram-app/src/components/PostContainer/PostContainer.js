import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const Postwrapper = styled.div `
max-width: 645px;
margin: 20px auto;
font-size: 0.85rem;
`  

const PostContainer = props => {
    return(
        <Postwrapper>
        {props.post.map((post,index) => (<Post post={post} index={index} key={post.timestamp} addComment={props.addComment} /> ))}
        </Postwrapper>
        )
}

export default PostContainer;