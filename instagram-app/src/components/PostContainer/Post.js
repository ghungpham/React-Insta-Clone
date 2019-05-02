import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
import styled from 'styled-components';

const EachPost = styled.div `
    margin-bottom: 20px;
    padding-bottom: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
`
const PostHeader = styled.div `
    display: flex;
    justify-content: baseline;
    align-items: center;
    font-weight: bold;
    margin-bottom: 20px;
    padding: 20px 0px 0px 10px;
`
const Thumbnail = styled.img `
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%; 
    margin-right: 10px;
`
const PostPic = styled.img `
    margin: 0 auto;
    width: 643px;
    height: auto;
`

const PostBelow = styled.div `
    padding: 10px 0 0 10px;
`
const Date = styled.p `
    margin-top: 10px;
    color: gray;
    font-size: 0.65rem;
`


const Post = props => {
    return(
        <EachPost>
            <PostHeader>
                <Thumbnail src={props.post.thumbnailUrl} alt={props.post.username}></Thumbnail>
                <h6>{props.post.username}</h6>
            </PostHeader>
             <PostPic src={props.post.imageUrl} alt={props.post.timestamp}></PostPic>
            <PostBelow>
                <CommentSection post={props.post} index={props.index} addComment={props.addComment} />
                 <Date>{moment(props.post.timestamp).fromNow().toUpperCase()}</Date>
            </PostBelow>
        </EachPost>
    )
}

export default Post;