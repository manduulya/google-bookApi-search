import React, { Component } from 'react';
import './SearchTerm.css';

export default class SearchTerm extends Component{
    render() {
        return(
            <form className='SearchFieldWrapper'>
                <label htmlFor='SearchBar'>Search</label>
                <input type='text' id='SearchBar' placeholder='Search Term'></input>
                <button type='button'>Search</button>
            </form>
        )
    }
}