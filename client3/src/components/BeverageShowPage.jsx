import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BEVERAGE } from '../queries/beverageQueries';
import AddToCartBtn from './AddToCartBtn';

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
            <div className="mx-auto w-75 card p-5">
                <button className="btn btn-primary btn-small w-25 d-inline ms-auto mb-20" onClick={() => addCartItem(data.beverage)}>Add to Cart</button>
                <Link to="/beverages" className="btn btn-light btn-sm w-25 d-inline ms-auto">
                    Back
                </Link>
                <div>
                    <div>
                        <img src={ data.beverage.image } alt="beverage image" />
                    </div>
                    <div>
                        <h1>{ data.beverage.name }</h1>
                        <h3>{ data.beverage.description }</h3>
                        <h2>{ data.beverage.price }</h2>
                    </div>
                </div>
            </div>
        )
      }
    </>
  )
}
