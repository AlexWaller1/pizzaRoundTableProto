import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_CARTS } from '../queries/cartQueries';

export default function CartShowPage() {
  const { loading, error, data } = useQuery(GET_CARTS);
  if (loading) return <h3>Loading Cart</h3>
  if (error) return <h3>Something Went Wrong</h3>
  return (
    <div>CartShowPage</div>
  )
}
