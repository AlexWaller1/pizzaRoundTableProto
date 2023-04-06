import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DESSERT } from '../queries/dessertQueries';

export default function DessertShowPage() {
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
            <div className="mx-auto w-75 card p-5">
                <Link to="/desserts" className="btn btn-light btn-sm w-25 d-inline ms-auto">
                    Back
                </Link>
                <div>
                    <div>
                        <img src={data.dessert.image} alt="dessert image" />
                    </div>
                    <div>
                        <h1>{ data.dessert.name }</h1>
                        <h3>{ data.dessert.description }</h3>
                        <h2>{ data.dessert.price }</h2>
                    </div>
                </div>
            </div>
        )
      }
    </>
  )
}
