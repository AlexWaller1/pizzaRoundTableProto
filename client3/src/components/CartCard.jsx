import React from 'react'

export default function CartCard({ cart }) {
  return (
    <div className='col-md-12'>
        <div className="card mb-3 w-50">
            <div className="d-flex justify-content-between align-content-center">
                <h5 className="cart-title">{cart.name}</h5>
            </div>
            <img src={cart.image} alt="cart-image" />
            <h6 className="cart-price">{cart.price}</h6>
        </div>
    </div>
  )
}
