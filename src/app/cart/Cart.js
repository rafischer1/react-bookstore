import React from 'react'
import Total from '../total/Total'

export default class Cart extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      cart: []
    }
  }

render() {
  return (<div>
           {/* <span>{item.title}</span>
           <span>${item.price}:00</span> */}
         
           <Total items={this.state.cart} />
           <button>Checkout Now</button>
        </div>
   )
  }
}
