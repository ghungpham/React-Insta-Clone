import React from 'react';
// import './SearchBar.css';
import styled from 'styled-components';

const SearchBarWrapper = styled.header `
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid lightgray;
    font-size: 1.4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`
const LogoHeader = styled.div `
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 50px;
    `
const LogoImg = styled.div `
    margin-left: 10px;
    border-left: 1px solid black;
    padding-left: 10px;
`

class SearchBar extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            input: ""
        };

    }

    onSearch = event => {
        let input = event.target.value;
        this.setState({input : input})
    }

    handleSubmit = event =>{
            event.preventDefault();

    }

    render(){
        return(
            <SearchBarWrapper>
            <LogoHeader>
            <i className="fab fa-instagram"></i>
            <LogoImg><img src="./instalogo.png" alt="Instagram"></img></LogoImg>
            </LogoHeader>
            <form onSubmit= {this.handleSubmit}>
            <input 
                type="text" 
                name="search" 
                placeholder="Search" 
                value={this.state.input}
                onChange={this.onSearch}
                />
            </form>
            <div className = "righti">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
            </SearchBarWrapper>
        )
    }
}


export default SearchBar;
