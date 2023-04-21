import React from 'react'
import DeleteFromCartBtn from './DeleteFromCartBtn'

export default function CartCard({ cart, deleteCartItem }) {
  return (
    <div className='col-md-12'>
        <div className="card mb-3 w-70">
            <div className="d-flex justify-content-between align-content-center">
                <h5 className="cart-title">{cart.name}</h5>
                <DeleteFromCartBtn cartId={cart.id} />
            </div>
            <img src={cart.image} alt="cart-image" />
            <h6 className="cart-price">{cart.price}</h6>
        </div>
    </div>
  )
}
