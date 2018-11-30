import React from 'react'

export default class Total extends React.Component {
  render() {
     if (this.props.item === undefined) {
       return false
     }
     let price = parseInt(this.props.item.length) * 5
    return (
      <div>Total Price = ${price}.00
      <br /> 
      <button>Checkout Now</button>
      </div>
      
    )
  }
}
