import React from 'react'
import CartItems from '../cart/CartItems'

const SearchResultsList = ({book}) => {
  let cartItems = []
  const addItemToCart = (ev) => {
    cartItems.push(ev.target.value)
    console.log(cartItems)
    return <CartItems items={CartItems} />
  }
  // console.log("search result list:", book)
  if (book === undefined) {
    // console.log("search results are undefined")
    return false
  } 
  return (
    book.map((item, idx) => {
      return (
        <div className="searchResults">
          <i>{item.title}</i><br />
          By: {item.author}<br />
          ${item.price}<br />
          <button type="submit" value={[item.title, item.price]} onClick={addItemToCart}>Add To Cart</button>
        </div>
      )
    })
  )
   
}

export default SearchResultsList