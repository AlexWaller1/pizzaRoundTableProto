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
    <></>
  )
}
