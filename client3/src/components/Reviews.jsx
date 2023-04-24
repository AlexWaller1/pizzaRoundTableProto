import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from '../queries/reviewQueries';

export default function Reviews() {
  const { loading, error, data } = useQuery(GET_REVIEWS);
  if(loading) return <h3>Loading Reviews</h3>
  if(error) return <h3>Something Went Wrong</h3>
  return (
    <></>
  )
}
