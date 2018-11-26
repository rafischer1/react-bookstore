import React, { Component } from 'react';
import './App.css';
import BookItemsList from './book-list/BookItemsList'
import Cart from './cart/Cart'
import SearchBar from './search-bar/SearchBar'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.apibase = 'http://localhost:8082/api'
    this.state = { 
      books: [],
      cart: []
     }
  }

  async componentDidMount() {
    const response = await fetch(`${this.apibase}/books`)
    if (response.status === 200) {
      let resJson = await response.json()
      // console.log('resJson', resJson)
      this.setState({
        ...this.state,
        books: resJson
      })
    } else {
      console.log('I broke on the GET fetch', response)
      throw new Error('Uh oh! I broke on the GET request')
    }
  }

  render() {
    return (
      <main className="App">
          <SearchBar books={this.state.books}/>
      <hr />
        <BookItemsList items={this.state.books} />       
        <div className="shoppingCart">
        <Cart />
        </div>
      </main>
    )
  }
}




