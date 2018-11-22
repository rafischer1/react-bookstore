import React from 'react'

const BookList = ({ item }) => {
  console.log('in book list', item)
  // let itemPrice = item.product.priceInCents + ''
  // let price = `$ ${itemPrice.substring(0, itemPrice.length - 2)}.${itemPrice.substring(itemPrice.length - 2)}`
  return (
    <div>
      <div className="booksList">
        <div>Title: {item.title}</div>
        <br />
        <div>Subtitle: {item.subtitle}</div>
        <br />
        <div>Author: {item.author}</div>
        <br />
        <div>Page #:{item.pages}</div>
        <br />
        <div>Publisher:{item.publisher}</div>
        <br />
        <div>Published: {item.published}</div>
        <br />
        <a href={item.website} target="_blank" >{item.website}</a>
        <div className="price">${item.price}.00</div>
        <br />
        <button onClick="addItem">Add to Cart</button>
        <hr />
        <br />
      </div>
    </div>
  )
}

export default BookList