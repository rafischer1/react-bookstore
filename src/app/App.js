import React, { Component } from 'react';
import './App.css';
// import CardList from '../components/CardList'
// import CardData from '../components/CardData.json'
// import AddCardForm from '../components/AddCardForm'
import BookItemsList from './book-list/BookItemsList'
import Total from './total/Total'
import SearchBar from './search-bar/SearchBar'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.apibase = 'http://localhost:8082/api'
    this.state = { books: [] }
  }

  async componentDidMount() {
    const response = await fetch(`${this.apibase}/books`)
    if (response.status === 200) {
      let resJson = await response.json()
      console.log('resJson', resJson)
      this.setState({
        ...this.state,
        books: resJson
      })
    } else {
      console.log('I broke on the GET fetch', response)
    }
  }

  render() {
    return (
      <main className="App">
      <SearchBar />
      <hr />
        <span>Books:</span>
        <BookItemsList items={this.state.books} />
        <div className="shoppingCart">
        {/* Shopping cart goes here */}
        <Total items={this.state.books} />
        <button>Checkout Now</button>
        </div>
      </main>
    )
  }
}

{/* <div className="main">
          <CardList title="To Do" card={CardData} />
          <AddCardForm />
        </div> */}
