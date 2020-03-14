import React, { Component } from 'react';
import './FilterBookType.css';

export default class FilterBookType extends Component{

    render(){

        return(
            <section className='BookTypeFilter'>
                <label htmlFor='BookType'>Book type:</label>
                <select id='BookType' name='BookType'>
                    <option value="None">No Filter</option>
                </select>
            </section>
        )

    }

}