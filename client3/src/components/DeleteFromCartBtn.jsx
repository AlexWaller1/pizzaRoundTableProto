import React from 'react'
import { DELETE_CART } from '../mutations/cartMutations';
import { GET_CARTS } from '../queries/cartQueries';
import { useMutation } from '@apollo/client';
import "./DeleteFromCartBtn.css";

export default function DeleteFromCartBtn({ cartId }) {
  const [deleteFromCart] = useMutation(DELETE_CART, {
    variables: { id: cartId },
    refetchQueries: [{ query: GET_CARTS }]
  })
  return (
    <div className="d-flex mt-5 ms-auto" id="delete-from-cart-btn-div">
        <button className="btn btn-dark m-2" id="delete-from-cart-btn" onClick={deleteFromCart}>
           <h5 className="delete-from-cart-btn-text">Delete From Cart</h5>
        </button>
    </div>
  )
}
