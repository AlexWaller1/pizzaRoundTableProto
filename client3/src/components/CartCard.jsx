import React from 'react'
import DeleteFromCartBtn from './DeleteFromCartBtn'
import "./CartCard.css"

export default function CartCard({ cart }) {
  return (
    <div className='col-md-12' id="cart-card">
        <div className="card mb-3 w-70" id="cart-card-div">
            <div className="d-flex justify-content-between align-content-center" id="cart-card-name-and-btn-div">
                <h5 className="cart-title">{cart.name}</h5>
                <DeleteFromCartBtn cartId={cart.id} />
            </div>
            <div id="cart-card-image-div">
              <img src={cart.image} alt="cart-image" id="cart-image"/>
            </div>
            <h6 className="cart-price">{cart.price}</h6>
        </div>
    </div>
  )
}
