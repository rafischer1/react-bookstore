import React from 'react'

const CartItems = ({ items }) => {
  // let itemPrice = item.product.priceInCents + ''
  // let price = `$ ${itemPrice.substring(0, itemPrice.length - 2)}.${itemPrice.substring(itemPrice.length - 2)}`
  console.log('in CartItems:', items)
  return (
    <div className="collection-item">
    Book List
      <div className="row">
        <div>Item</div>
        <div>Item</div>
      </div>
    </div>
  )
}

export default CartItems