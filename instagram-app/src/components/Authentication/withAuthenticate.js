import React from 'react';


const withAuthenticate = PostsPage => Login =>  
    class extends React.Component{
        render(){
            if (localStorage.getItem('username')){
                return <PostsPage/> }
            else {
                return <Login />
            }
        }
    } 


export default withAuthenticate;