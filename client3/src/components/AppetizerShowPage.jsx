import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_APPETIZER } from '../queries/appetizerQueries';

export default function AppetizerShowPage() {
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
            <div className="mx-auto w-75 card p-5">
                <Link to="/appetizers" className='btn btn-light btn-sm w-25 d-inline ms-auto'>
                    Back
                </Link>
                <div>
                    <div>
                        <img src={ data.appetizer.image } alt="appetizer image" />
                    </div>
                    <div>
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
