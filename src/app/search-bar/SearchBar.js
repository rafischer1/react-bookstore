import React from 'react'
import SearchResultList from './SearchResultsList'

export default class SearchBar extends React.Component {

  filterFunc = (ev) => {
    ev.preventDefault()
    let input = ev.target[2].value
    let author = ev.target[0].checked
    let title = ev.target[1].checked
    let books = this.props.books

    // if statement to determine input type
    if (author === true && title === true) {
      alert("Please select 'Author' OR 'Title'")
    } else if (author === true && title === false) {
      console.log("Author search", input)
      // find just the books authors
      books.forEach((book) => {
        console.log(book.author.toLowerCase().indexOf(input.toLowerCase()) >= 0)
        if (book.author.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
          console.log("author return:", book)
          return book
        }
      })
    } else if (title === true && author === false) {
      console.log("Title search time")
      books.forEach((book) => {
        if (book.title.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
          console.log("title result:", book)
          return book
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
        <SearchResultList results={this.book}/>
      </div>
     
    )
  }
}