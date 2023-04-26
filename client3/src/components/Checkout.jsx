import React, { useState } from 'react'
import { GET_CARTS } from '../queries/cartQueries';
import { DELETE_CARTS } from '../mutations/cartMutations';
import { useQuery, useMutation } from '@apollo/client';

export default function Checkout() {
  const [thankYou, setThankYou] = useState(false);
  
  let price = 0;
  let totalPrice = 0;
  const { loading, error, data } = useQuery(GET_CARTS);
  data.carts.map(cart => {
    price = parseFloat(cart.price);
    if (!isNaN(price)) {
      totalPrice = totalPrice + price;
    }
  });
  const [deleteFromCart] = useMutation(DELETE_CARTS, {
    refetchQueries: [{ query: GET_CARTS }]
  })

  let clearCart = () => {
    setThankYou(true);
    deleteFromCart();
  }

  
  if (loading) return <h3>Loading Checkout Page</h3>
  if (error) return <h3>Something Went Wrong</h3>
  return (
    <div>
        { thankYou && <h2>Thank You For Your Order!</h2>}
        { !thankYou && <>
            <h3>{`Total Price: $${totalPrice.toFixed(2)}`}</h3>
            <button className="btn btn-dark" href="/" onClick={() => clearCart()}>Complete Checkout</button>
        </>}
       
    </div>
  )
}