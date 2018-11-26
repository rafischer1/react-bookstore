import React, { Component } from 'react';
import './App.css';
import BookItemsList from './book-list/BookItemsList'
import Cart from './cart/Cart'
import SearchBar from './search-bar/SearchBar'
import Total from './total/Total'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.apibase = 'http://localhost:8082/api'
    this.state = { 
      books: [],
      cart: []
     }
  }

  addToCartCallback = (value) => {
    
    console.log("app.js value for cart:", value)
    return this.setState({
           ...this.state,
           cart: this.state.cart.concat(value)
    })
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
        <SearchBar books={this.state.books} addToCartCallback={this.addToCartCallback}/>
        <hr />
        <BookItemsList items={this.state.books} addToCartCallback={this.addToCartCallback} /> 
        <div className="shoppingCart">
          <Cart item={this.state.cart} />
          <Total item={this.state.cart} />
        </div>
      </main>
    )
  }
}




