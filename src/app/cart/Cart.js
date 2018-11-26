import React from 'react'

const Cart = ({item}) => {
  console.log("in Cart:", item)
return item.map((el) => 
      <div>
        <div><i>{el}</i></div>
        <hr />
        {/* <button>Remove</button> */}
      </div>
  )
  

  
}

export default Cart