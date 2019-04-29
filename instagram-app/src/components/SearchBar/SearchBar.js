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
        this.setState({[event.target.name] : event.target.value})
    }

    handleSubmit = event =>{
            event.preventDefault();

    }

    render(){
        return(
            <div classNames= "searchbar">
            
            </div>
        )
    }
}


export default SearchBar;
