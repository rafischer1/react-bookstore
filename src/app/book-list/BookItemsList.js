import React from 'react'
import BookList from './BookList'
const BookItemsList = ({items}) => {
  console.log('booklist', items);
  if (items.length === 0) {
    return false
  } else {
    return (<span>{items.map((x, y) => <BookList id={y} key={y} item={x} />)}</span>)
  }

// return (<span>{items.map((x, y) => <BookList id={y} key={y} item={x} />)}</span>)
}

export default BookItemsList
