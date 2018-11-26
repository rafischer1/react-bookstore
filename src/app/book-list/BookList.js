import React from 'react'


const BookList = ({ item, addToCartCallback }) => {
  const titleStyle = {
    fontSize: '17px'
  }

  const addItemToCart = (ev) => {
    let values = []
    values.push(ev.target.value)
    addToCartCallback(values)
  }
  
  

  const date = item.published.split('T')[0]
  const published = `${date.split('-')[1]}/${date.split('-')[2]}/${date.split('-')[0]}`

  return (
    <div>
      <div className="booksList">
        <div style={titleStyle}><b>Title:</b> <i>{item.title}</i></div>
        <div><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.subtitle}</i></div>
        <br />
        <div><b>Author:</b> {item.author}</div>
        <br />
        <div><b>Page #:</b> {item.pages}</div>
        <br />
        <div><b>Publisher:</b>{item.publisher}</div>
        <br />
        <div><b>Published:</b> {published}</div>
        <br />
        <a href={item.website} target="_blank" >{item.website}</a>
        <br />
        <div className="price">${item.price}.00</div>
        <br />
        <button onClick={addItemToCart} value={item.title} id={item.id}>Add to Cart</button>
        <hr />
        <br />
      </div>
    </div>
  )
}

export default BookList