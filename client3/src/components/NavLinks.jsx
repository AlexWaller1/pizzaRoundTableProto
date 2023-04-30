import React from 'react'
import { Link } from "react-router-dom";
import { GET_CARTS } from '../queries/cartQueries';
import { useQuery } from "@apollo/client"
import "./NavLinks.css";
import CartBtnIcon from './CartBtnIcon';

export default function NavLinks({ cart }) {
  
  const { loading, error, data } = useQuery(GET_CARTS);
  if (loading) return <h3>Loading Cart Data</h3>
  if (error) return <h3>Something Went Wrong</h3>
  return (
    <ul id="nav-links-list" className='d-flex justify-content-between'>
        <h4 id="pizza-roundtable-nav-link">
            <Link to="/">Home</Link>
        </h4>
        <h4 id="pizza-roundtable-nav-link">
            <Link to="/pizzas">Pizzas</Link>
        </h4>
        <h4 id="pizza-roundtable-nav-link">
            <Link to="/appetizers">Appetizers</Link>
        </h4>
        <h4 id="pizza-roundtable-nav-link">
            <Link to="/beverages">Beverages</Link>
        </h4>
        <h4 id="pizza-roundtable-nav-link">
            <Link to="/desserts">Desserts</Link>
        </h4>
        <h4 id="pizza-roundtable-nav-link">
            <Link to="reviews">Reviews</Link>
        </h4>
        <h4 id="pizza-roundtable-nav-link">
            <Link to="/cart"><CartBtnIcon/> {`Cart: ${ data.carts.length }`}</Link>
        </h4>
    </ul>
  )
}
