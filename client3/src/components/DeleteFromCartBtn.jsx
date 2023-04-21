import React from 'react'
import { DELETE_CART } from '../mutations/cartMutations';
import { GET_CARTS } from '../queries/cartQueries';
import { useMutation } from '@apollo/client';

export default function DeleteFromCartBtn({ cartId }) {
  const [deleteFromCart] = useMutation(DELETE_CART, {
    variables: { id: cartId },
    refetchQueries: [{ query: GET_CARTS }]
  })
  return (
    <div className="d-flex mt-5 ms-auto">
        <button className="btn btn-dark m-2" onClick={deleteFromCart}>
           Delete From Cart
        </button>
    </div>
  )
}
