import React, { Component } from 'react';
import './FilterPrintType.css';

export default class FilterPrintType extends Component{

    render(){

        return(
            <section className='BookPrintFilter'>
                <label htmlFor='PrintType'>Print type:</label>
                <select id='PrintType' name='PrintType'>
                    <option value="None">All</option>
                </select>
            </section>
        )

    }

}