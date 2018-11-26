import React from 'react'
import Cart from '../cart/Cart'

const SearchResultsList = ({ book, addToCartCallback}) => {
 
  // const addItemToCart = (ev) => {
  //   console.log('new cart item from search:', ev.target.value)
  //   let item = ev.target.value
  //   return <Cart item={item} />
   
  // }
  const addItemToCart = (ev) => {
    let values = []
    values.push(ev.target.value)
    addToCartCallback(values)
  }
  // console.log("search result list:", book)
  if (book === undefined) {
    // console.log("search results are undefined")
    return false
  } 
  return (
    book.map((item, idx) => {
      return (
        <div className="searchResults" idx={idx}>
          <i>{item.title}</i><br />
          By: {item.author}<br />
          ${item.price}<br />
          <button type="submit" value={item.title} onClick={addItemToCart}>Add To Cart</button>
        </div>
      )
    })
  )
   
}

export default SearchResultsList