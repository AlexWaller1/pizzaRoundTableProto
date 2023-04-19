import React from 'react'
import { Link } from "react-router-dom";

export default function NavLinks({ cart }) {
  console.log(localStorage);
  return (
    <ul className="nav-links-list">
        <h4>
            <Link to="/">Home</Link>
        </h4>
        <h4>
            <Link to="/pizzas">Pizzas</Link>
        </h4>
        <h4>
            <Link to="/appetizers">Appetizers</Link>
        </h4>
        <h4>
            <Link to="/beverages">Beverages</Link>
        </h4>
        <h4>
            <Link to="/desserts">Desserts</Link>
        </h4>
        <h4>Cart: {cart.length}</h4>
    </ul>
  )
}
