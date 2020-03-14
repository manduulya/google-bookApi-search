import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import SearchTerm from './Components/SearchTerm'
import Filter from './Components/Filter';
import List from './Components/List';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      resultList: []
    };
  };

  componentDidMount(){

    const url = 'https://www.googleapis.com/books/v1/volumes?q=flowers&printType=all&filter=paid-ebooks&key=AIzaSyCyn2zWxE8-16ylF6PPzltYbvSiub_6ep0'


    //get request from Google Book API
    fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return response;
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        resultList: data.items,
      })
      console.log(data.items)
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  };

  render(){
    const list = this.state.resultList
        
    return(
        <main className='wrapper'>
        <Header />
        <SearchTerm />
        <Filter />
        <List> {list} </List>
        </main>
      )
    }
  }

export default App;
