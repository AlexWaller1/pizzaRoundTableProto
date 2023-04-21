import React from 'react'
import { Link } from "react-router-dom";
import { GET_CARTS } from '../queries/cartQueries';
import { useQuery } from "@apollo/client"

export default function NavLinks({ cart }) {
  
  const { loading, error, data } = useQuery(GET_CARTS);
  if (loading) return <h3>Loading Cart Data</h3>
  if (error) return <h3>Something Went Wrong</h3>
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
        <h4>
            <Link to="/cart">{`Cart: ${ data.carts.length }`}</Link>
        </h4>
    </ul>
  )
}
