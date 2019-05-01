import React from 'react';
import './SearchBar.css';

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
            <div className= "searchbar">
            <div className="lefti">
            <i className="fab fa-instagram"></i>
            <h5>Instagram</h5>
            </div>
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
            </div>
        )
    }
}


export default SearchBar;
