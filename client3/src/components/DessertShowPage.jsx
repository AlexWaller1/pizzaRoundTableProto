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
    <></>
  )
}
