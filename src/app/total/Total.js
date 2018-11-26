import React from 'react'

export default class Total extends React.Component {
  render() {
     console.log(this.props.item.length)
     let price = parseInt(this.props.item.length) * 5
  // let itemPrice = item.product.priceInCents + ''
  // let price = `$ ${itemPrice.substring(0, itemPrice.length - 2)}.${itemPrice.substring(itemPrice.length - 2)}`
  // console.log("in cart:", this.props)
    return (
      // <div>Total Price = {price}</div>
      <div>Total Price = ${price}.00</div>
    )
  }
}
