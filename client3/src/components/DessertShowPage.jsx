import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DESSERT } from '../queries/dessertQueries';
import "./ShowPage.css";

export default function DessertShowPage({ addCartItem }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DESSERT, {
    variables: { id }
  });

  if (loading) return <h3>Dessert Loading...</h3>
  if (error) return <h3>Something Went Wrong</h3>

  return (
    <>
      {
        !loading && !error && (
            <div className="mx-auto w-75 card p-5" id="dessert-show-page-div">
                
                <div id="dessert-image-and-info-div">
                    <div id="dessert-image-div">
                        <img src='234yrngje35r3r43445' alt="dessert image" id="dessert-image" />
                    </div>
                    <div id="dessert-additional-info-div">
                        <h1>{ data.dessert.name }</h1>
                        <h3>{ data.dessert.description }</h3>
                        <h2>{ data.dessert.price }</h2>
                    </div>
                </div>
                <div className="d-flex" id="dessert-show-page-btns-div">
                  <button className='btn btn-dark btn-small w-25 d-inline ms-auto mb-20' id="dessert-add-to-cart-btn" onClick={() => addCartItem(data.dessert)}><h5>Add to Cart</h5></button>
                  <Link to="/desserts" className="btn btn-dark btn-sm w-25 d-inline ms-auto mt-15" id="desserts-back-btn">
                     <h5>Back</h5> 
                  </Link>
                </div>
            </div>
        )
      }
    </>
  )
}
