import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_APPETIZER } from '../queries/appetizerQueries';
import "./ShowPage.css"

export default function AppetizerShowPage({ addCartItem }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_APPETIZER, {
    variables: { id }
  })

  if (loading) return <h3>Appetizer Loading</h3>
  if (error) return <h3>Something Went Wrong</h3>

  return (
    <>
      {
        !loading && !error && (
            <div className="mx-auto w-75 card p-5" id="appetizer-show-page-div">
                <button className='btn btn-primary btn-small w-25 d-inline ms-auto' id="appetizer-add-to-cart-btn" onClick={() => addCartItem(data.appetizer)}>Add To Cart</button>
                <Link to="/appetizers" className='btn btn-dark btn-sm w-25 d-inline ms-auto' id="appetizer-show-page-back-btn">
                    Back
                </Link>
                <div id="appetizer-info-div">
                    <div id="appetizer-image-div">
                        <img src={ data.appetizer.image } alt="appetizer image" />
                    </div>
                    <div id="appetizer-additional-info-div">
                        <h1>{ data.appetizer.name }</h1>
                        <h3>{ data.appetizer.description }</h3>
                        <h2>{ data.appetizer.price }</h2>
                    </div>
                </div>
            </div>
        )
      }
    </>
  )
}
