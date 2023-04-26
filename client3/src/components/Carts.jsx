import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_CARTS } from '../queries/cartQueries';
import { Link } from "react-router-dom";
import CartCard from './CartCard';

export default function Carts({ deleteCartItem }) {
  
  const { loading, error, data } = useQuery(GET_CARTS);
  if (loading) return <h3>Loading Cart</h3>
  if (error) return <h3>Something Went Wrong</h3>
  let totalPrice = 0;
  let price = 0;
  data.carts.map(cart => {
    price = parseFloat(cart.price);
    if (!isNaN(price)) {
      totalPrice = totalPrice + price;
    }
    
  });

  return (
    <>
      { data.carts.length > 0 ? (
        <div className="row mt-3" id="all-cart-items-page">
          {data.carts.map(cart => (
            <CartCard key={ cart.id } cart={ cart } deleteCartItem={ deleteCartItem }/>
          ))}
        </div>
      ) : <div>No Cart Items</div>}
      <div id="total-price-div" className="d-flex justify-content-between">
        <h4>Total Price: {"$" + totalPrice.toFixed(2) } </h4>
        <Link className="btn btn-dark" to="/checkout" id="checkout-btn">Go To Checkout</Link>
      </div>
    </>
  )
}
