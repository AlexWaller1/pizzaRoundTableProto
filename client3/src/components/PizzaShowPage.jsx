import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_PIZZA } from '../queries/pizzaQueries';

export default function PizzaShowPage() {
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
            <div className='mx-auto w-75 card p-5'>
                <Link to="/pizzas" className="btn btn-light btn-sm w-25 d-inline ms-auto">
                    Back
                </Link>
                <div>
                    <div>
                        <img src={ data.pizza.image } alt="pizza" />
                    </div>
                    <div>
                      <h1>{ data.pizza.name }</h1>
                      <h3>{ data.pizza.description }</h3>
                      <h2>{ data.pizza.price }</h2>
                    </div>
                </div>
            </div>
        )
      }
    </>
  )
}
