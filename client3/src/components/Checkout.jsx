import React from 'react'
import { GET_CARTS } from '../queries/cartQueries';
import { DELETE_CARTS } from '../mutations/cartMutations';
import { useQuery, useMutation } from '@apollo/client';

export default function Checkout() {
  let id;
  let totalPrice = 0;
  let price = 0;
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

  let clearCart = (cart) => {
    cart.map(cart => deleteFromCart(cart.id));
  }

  
  if (loading) return <h3>Loading Checkout Page</h3>
  if (error) return <h3>Something Went Wrong</h3>
  return (
    <div>
        <h3>{`Total Price: $${totalPrice.toFixed(2)}`}</h3>
        <button className="btn btn-dark" href="/" onClick={() => clearCart(data.cart)}>Complete Checkout</button>
    </div>
  )
}
