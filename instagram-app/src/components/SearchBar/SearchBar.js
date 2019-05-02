import React from 'react';
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
const LogoImg = styled.img `
    margin-left: 10px;
    border-left: 1px solid black;
    padding-left: 10px;
    background: url("./instalogo.png")
`
const Searchright = styled.div `
    padding-right: 50px;
    width: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
` 
const SearchInput = styled.input `
        background-color: white;
        border: solid 1px lightgray;
        padding: 6px 5px;
        font-size: 0.8rem;
        width: 300px;
        outline: 0;
        color: gray;
        border-radius: 5px;
        &::placeholder {
            text-align: center;
        }
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
            <LogoImg src="./../../instalogo.png" alt="Instagram"></LogoImg>
            </LogoHeader>
            <form onSubmit= {this.handleSubmit}>
            <SearchInput 
                type="text" 
                name="search" 
                placeholder="Search" 
                value={this.state.input}
                onChange={this.onSearch}
                />
            </form>
            <Searchright>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </Searchright>
            </SearchBarWrapper>
        )
    }
}


export default SearchBar;
