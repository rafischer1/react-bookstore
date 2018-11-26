import React from 'react'

const SearchResultsList = ({book}) => {
  const addItemToCart = (ev) => {
    console.log(ev.target)
  }
  console.log("search result list:", book)
  if (book === undefined) {
    console.log("search results are undefined")
    return false
  } 
  return (
    book.map((item) => {
      return (
        <div>
          {item.title}<br />
          {item.author}<br />
          ${item.price}<br />
          <button type="submit" onClick={addItemToCart}>Add To Cart</button>
        </div>
      )
    })
  )
   
}

export default SearchResultsList