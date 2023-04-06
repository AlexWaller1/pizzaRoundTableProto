import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BEVERAGE } from '../queries/beverageQueries';

export default function BeverageShowPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BEVERAGE, {
    variables: { id }
  })

  if (loading) return <h3>Beverage Loading...</h3>
  if (error) return <h3>Something Went Wrong</h3>

  return (
    <></>
  )
}
