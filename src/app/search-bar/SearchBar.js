import React from 'react'
import SearchResultList from './SearchResultsList'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      _book: []
    }
  }

  filterFunc = (ev) => {
    ev.preventDefault()
    let input = ev.target[2].value
    let author = ev.target[0].checked
    let title = ev.target[1].checked
    let books = this.props.books
    let results = []

    // if statement to determine input type
    if (author === true && title === true) {
      alert("Please select 'Author' OR 'Title'")
    } else if (author === true && title === false) {
      console.log("Author search", input)
      // find just the books authors
      books.forEach((result) => {
        console.log(result.author.toLowerCase().indexOf(input.toLowerCase()) >= 0)
        if (result.author.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
          console.log("author return:", result)
          results.push(result)
          this.setState({
            ...this.state,
            _book: results,
            get book() {
              return this._book;
            },
            set book(value) {
              this._book = value;
            },
          })
        }
      })
    } else if (title === true && author === false) {
      console.log("Title search time")
      books.forEach((result) => {
        if (result.title.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
          console.log("title result:", result)
          results.push(result)
          this.setState({
            ...this.state,
            book: results
          })
        }
      })
    } else {
      alert("Please select a search option: 'Author' or 'Title'")
    }

  }
  render() {
    return (
      <div className="topnav">
        <a className="active" href="/">RAF API BookStore</a>
        <form onSubmit={this.filterFunc}>
          <div>
            <input type="checkbox" id="author" name="Author" value="Author" defaultChecked />
            <label htmlFor="author">Author</label>
          </div>
          <div>
            <input type="checkbox" id="title" name="Title" value="Title" />
            <label htmlFor="title">Title</label>
          </div>
    
          <input type="text" placeholder="Search.." />
          <input type="submit" placeholder="Submit"  />
        </form>
        <SearchResultList book={this.state.book}/>
      </div>
     
    )
  }
}