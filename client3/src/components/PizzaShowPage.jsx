import React from 'react'
import { useParams } from "react-router-dom";
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
      
    </>
  )
}
