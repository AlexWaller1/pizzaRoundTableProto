import React from 'react'
import { DELETE_CART } from '../mutations/cartMutations';
import { GET_CARTS } from '../queries/cartQueries';
import { useMutation } from '@apollo/client';
import DeleteFromCartBtnIcon from './DeleteFromCartBtnIcon';
import "./DeleteFromCartBtn.css";

export default function DeleteFromCartBtn({ cartId }) {
  const [deleteFromCart] = useMutation(DELETE_CART, {
    variables: { id: cartId },
    refetchQueries: [{ query: GET_CARTS }]
  })
  return (
    <div className="d-flex mt-5 ms-auto" id="delete-from-cart-btn-div">
        <button className="d-flex btn btn-dark m-2" id="delete-from-cart-btn" onClick={deleteFromCart}>
          <div className='mt-1'>
            <DeleteFromCartBtnIcon />
          </div>
          <h5 className="delete-from-cart-btn-text">Delete From Cart</h5>
        </button>
    </div>
  )
}
