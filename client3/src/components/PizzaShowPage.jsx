import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_PIZZA } from '../queries/pizzaQueries';
import BackBtnArrow from './BackBtnArrow';
import CartBtnIcon from './CartBtnIcon';
import "./ShowPage.css";

export default function PizzaShowPage({ addCartItem }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PIZZA, {
    variables: { id }
  });

  if (loading) return <h3>Loading Pizza...</h3>
  if (error) return <h3>Something Went Wrong</h3>

  return (
    <>
      {
        !loading && !error && (
            <div className='mx-auto w-75 card p-5' id="pizza-show-page-div">
                <div className="d-flex justify-content-between" id="pizza-image-and-info-div">
                    <div id="pizza-additional-info-div"> 
                      <h1>{ data.pizza.name }</h1>
                      <h3>{ data.pizza.description }</h3>
                      <h2>{ data.pizza.price }</h2>
                    </div>
                    <div id="pizza-image-div">
                        <img src={ data.pizza.image } alt="pizza" id="pizza-image" />
                    </div>
                </div>
                <div className="d-flex" id="pizza-show-page-btns-div">
                  <Link to="/pizzas" className="btn btn-dark btn-sm w-25 d-inline ms-auto" id="pizza-back-btn">
                      <div className='d-flex' id="backBtnDiv">
                        <BackBtnArrow />
                        <h5 className="back-btn-text">Back</h5>
                      </div>
                  </Link>
                  <button className="btn btn-dark btn-small w-25 d-inline ms-auto" id="pizza-add-to-cart-btn" onClick={() => addCartItem(data.pizza)}>
                    <div className="d-flex">
                      <h5 className="add-to-cart-btn-text">Add To Cart</h5>
                      <CartBtnIcon />
                    </div>
                  </button>
                </div>
            </div>
        )
      }
    </>
  )
}
