import React, { Component } from 'react';
import './Filter.css';
import FilterBookType from './FilterBookType';
import FilterPrintType from './FilterPrintType';

class Filter extends Component{
    render( ) {
        return (
            <section className='Filter'>
                <FilterBookType />
                <FilterPrintType />
            </section>
        )
    }
}

export default Filter;