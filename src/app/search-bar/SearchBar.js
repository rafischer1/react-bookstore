import React from 'react'

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <a className="active" href="/">RAF API BookStore</a>
        {/* <form onSubmit={onSubmit}> */}
        <form>
          <div>
            <input type="radio" id="author" name="Author" value="Author" defaultChecked />
            <label htmlFor="author">Author</label>
          </div>
          <div>
            <input type="radio" id="title" name="Title" value="Title" />
            <label htmlFor="title">Title</label>
          </div>
          <input type="text" placeholder="Search.." />
          <input type="submit" placeholder="Submit" />
        </form>
      </div>
    )
  }
}