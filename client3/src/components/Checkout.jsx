import React from 'react'
import { GET_CARTS } from '../queries/cartQueries';
import { DELETE_CART } from '../mutations/cartMutations';
import { useQuery } from '@apollo/client';

export default function Checkout() {

  let totalPrice = 0;
  let price = 0;
  const { loading, error, data } = useQuery(GET_CARTS);
  data.carts.map(cart => {
    price = parseFloat(cart.price);
    if (!isNaN(price)) {
      totalPrice = totalPrice + price;
    }
  });
  if (loading) return <h3>Loading Checkout Page</h3>
  if (error) return <h3>Something Went Wrong</h3>
  return (
    <div><h3>{`Total Price: $${totalPrice.toFixed(2)}`}</h3></div>
  )
}
