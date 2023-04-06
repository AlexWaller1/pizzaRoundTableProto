import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_APPETIZERS } from '../queries/appetizerQueries';
import AppetizerCard from './AppetizerCard';


export default function Appetizers() {
  const { loading, error, data } = useQuery(GET_APPETIZERS);
  if (loading) return <h3>Loading Appetizers</h3>
  if (error) return <h3>Something Went Wrong</h3>

  return (
    <>
      {data.appetizers.length > 0 ? (
        <div className="row mt-3">
           {data.appetizers.map(app => (
            <AppetizerCard key={app.id} appetizer={app}/>
           ))}
        </div>
      ) : <div>No Appetizers</div>}
    </>
  )
}
