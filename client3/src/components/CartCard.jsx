import React from 'react'
import DeleteFromCartBtn from './DeleteFromCartBtn';
import ClassicItalianPizzaImage from './ClassicItalianPizzaImage';
import ClassicItalianPizzaImage2 from './ClassicItalianPizzaImage2';
import ClassicItalianPizzaImage3 from './ClassicItalianPizzaImage3';
import ClassicItalianPizzaImage4 from './ClassicItalianPizzaImage4';
import ClassicItalianPizzaImage5 from './ClassicItalianPizzaImage5';
import ClassicItalianPizzaImage6 from './ClassicItalianPizzaImage6';
import AppetizerImage1 from './AppetizerImage1';
import AppetizerImage2 from './AppetizerImage2';
import AppetizerImage3 from './AppetizerImage3';
import AppetizerImage4 from './AppetizerImage4';
import "./CartCard.css"

export default function CartCard({ cart }) {
  return (
    <div className='col-md-12' id="cart-card">
        <div className="card mb-3 w-70" id="cart-card-div">
            <div className="d-flex justify-content-between align-content-center" id="cart-card-name-and-btn-div">
                <h3 className="cart-title">{cart.name}</h3>
                
            </div>
            <div id="cart-card-image-div">
              { cart.name === "Stuffed Pizza" ? <ClassicItalianPizzaImage width="200px" height="200px"/> : cart.name === "Lake Cushetunk Special!" ? <ClassicItalianPizzaImage2 width="200px" height="200px" /> : cart.name === "Eggplant Parmesean Pizza" ? <ClassicItalianPizzaImage3 height="200px" width="200px" /> : cart.name === "Sicilian Pizza" ? <ClassicItalianPizzaImage4 width="200px" height="200px" /> : cart.name === "White Pizza" ? <ClassicItalianPizzaImage5 width="200px" height="200px" /> : cart.name === "Meat Lovers Pizza" ? <ClassicItalianPizzaImage6 width="200px" height="200px"/> : cart.name === "Grilled Calamari" ? <AppetizerImage1 height="200px" width="200px"/> : cart.name === "Bruschetta" ? <AppetizerImage2 height="200px" width="200px"/> : cart.name === "Fried Scallops" ? <AppetizerImage3 height="200px" width="200px"/> : cart.name === "Antipasto" ? <AppetizerImage4 height="200px" width="200px" /> : ""}
            </div>
            <div className="d-flex justify-content-between" id="cart-card-price-div">
              <h4 className="mt-5" id="cart-price">{cart.price}</h4>
              <DeleteFromCartBtn cartId={cart.id} />
            </div>
            
        </div>
    </div>
  )
}
