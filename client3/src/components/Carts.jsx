import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_CARTS } from '../queries/cartQueries';
import CartCard from './CartCard';

export default function Carts() {
  
  const { loading, error, data } = useQuery(GET_CARTS);
  if (loading) return <h3>Loading Cart</h3>
  if (error) return <h3>Something Went Wrong</h3>
  let totalPrice = 0;
  data.carts.map(cart => totalPrice = totalPrice + cart.price);

  return (
    <>
      { data.carts.length > 0 ? (
        <div className="row mt-3">
          {data.carts.map(cart => (
            <CartCard key={ cart.id } cart={ cart }/>
          ))}
        </div>
      ) : <div>No Cart Items</div>}
      <div className="total-price-div">{ totalPrice }</div>
    </>
  )
}
