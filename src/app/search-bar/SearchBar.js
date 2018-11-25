import React from 'react'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    var updatedList = this.props
    
    console.log(updatedList)
  }
  
  render() {
    let searchResult
    const filterFunc = (ev) => {
      ev.preventDefault()
      // console.log("Author:", ev.target[0].checked, "Title:", ev.target[1].checked, ev.target[2].value, this.props)
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
         console.log(book.author.toLowerCase().indexOf(input.toLowerCase()) >=0 )
         if (book.author.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
           
           searchResult = book
           console.log("search result:", searchResult.title)
           return searchResult
         } 
       })
      } else if (title === true && author === false) {
        console.log("Title search time")
        books.forEach((book) => {
          if (book.title.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
            console.log("search result:", book)
            searchResult = book
            return searchResult
          } 
        })
      } else {
        alert("Please select a search option: 'Author' or 'Title'")
      }
      
    }
    return (
      <div className="topnav">
        <a className="active" href="/">RAF API BookStore</a>
        <form onSubmit={filterFunc}>
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
        <div className="searchResult">
          {searchResult}
        </div>
      </div>
     
    )
  }
}



// var FilteredList = React.createClass({
//   filterList: function (event) {
//     var updatedList = this.state.books;
//     updatedList = updatedList.filter(function (item) {
//       return item.toLowerCase().search(
//         event.target.value.toLowerCase()) !== -1;
//     });
//     this.setState({ books: updatedList });
//   },

//   render: function () {
//     return (
//       <div className="filter-list">
//         <form>
//           <fieldset className="form-group">
//             <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList} />
//           </fieldset>
//         </form>
//         <List items={this.state.items} />
//       </div>
//     );
//   }
// });

// var List = React.createClass({
//   render: function () {
//     return (
//       <ul className="list-group">
//         {
//           this.props.items.map(function (item) {
//             return <li className="list-group-item" data-category={item} key={item}>{item}</li>
//           })
//         }
//       </ul>
//     )
//   }
// });