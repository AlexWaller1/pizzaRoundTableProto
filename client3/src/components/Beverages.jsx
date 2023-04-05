import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_BEVERAGES } from '../queries/beverageQueries';

export default function Beverages() {
  const { data, loading, error } = useQuery(GET_BEVERAGES);
  if (loading) return <h3>Loading Beverages</h3>
  if (error) return <h3>Something Went Wrong</h3>
  return (
    <div>Beverages</div>
  )
}
