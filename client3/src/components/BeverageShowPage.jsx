import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BEVERAGE } from '../queries/beverageQueries';
import AddToCartBtn from './AddToCartBtn';
import "./ShowPage.css";

export default function BeverageShowPage({ addCartItem }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BEVERAGE, {
    variables: { id }
  })

  if (loading) return <h3>Beverage Loading...</h3>
  if (error) return <h3>Something Went Wrong</h3>

  return (
    <>
      {
        !loading && !error && (
            <div className="mx-auto w-75 card p-5" id="beverage-show-page-div">
                <div>
                    <div id="beverage-show-page-image-div">
                        <img src={ data.beverage.image } alt="beverage image" id="beverage-image" />
                    </div>
                    <div id="beverage-show-page-additional-info-div">
                        <h1>{ data.beverage.name }</h1>
                        <h3>{ data.beverage.description }</h3>
                        <h2>{ data.beverage.price }</h2>
                    </div>
                </div>
                <div className="d-flex" id="beverage-show-page-btns-div">
                  <button className="btn btn-dark btn-small w-25 d-inline ms-auto mb-20" id="beverage-add-to-cart-btn" onClick={() => addCartItem(data.beverage)}><h5 className="add-to-cart-btn-text">Add to Cart</h5></button>
                  <Link to="/beverages" className="btn btn-dark btn-sm w-25 d-inline ms-auto" id="beverage-back-btn">
                     <h5 className="back-btn-text">Back</h5> 
                  </Link>
                </div>
            </div>
        )
      }
    </>
  )
}
