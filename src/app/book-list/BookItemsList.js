import React from 'react'
import BookList from './BookList'

const BookItemsList = ({ items, addToCartCallback}) => {
  if (items.length === 0) {
    return false
  } 
  return (<span>{items.map((x, y) => <BookList id={y} key={y} item={x} addToCartCallback={addToCartCallback}/>)}</span>)
}

export default BookItemsList
