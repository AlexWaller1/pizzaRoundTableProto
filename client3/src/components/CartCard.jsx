import React from 'react'
import DeleteFromCartBtn from './DeleteFromCartBtn';
import ClassicItalianPizzaImage from './ClassicItalianPizzaImage';
import ClassicItalianPizzaImage2 from './ClassicItalianPizzaImage2';
import "./CartCard.css"

export default function CartCard({ cart }) {
  return (
    <div className='col-md-12' id="cart-card">
        <div className="card mb-3 w-70" id="cart-card-div">
            <div className="d-flex justify-content-between align-content-center" id="cart-card-name-and-btn-div">
                <h3 className="cart-title">{cart.name}</h3>
                
            </div>
            <div id="cart-card-image-div">
              {cart.name === "White Pizza" ? <ClassicItalianPizzaImage width="200px" height="200px"/> : cart.name === "Lake Cushetunk Special!" ? <ClassicItalianPizzaImage2 width="200px" height="200px" /> : <img src={cart.image} alt="cart-image" className="mt-5" id="cart-image"/>}
            </div>
            <div className="d-flex justify-content-between" id="cart-card-price-div">
              <h4 className="mt-5" id="cart-price">{cart.price}</h4>
              <DeleteFromCartBtn cartId={cart.id} />
            </div>
            
        </div>
    </div>
  )
}
