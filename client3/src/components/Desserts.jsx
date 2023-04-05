import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_DESSERTS } from '../queries/dessertQueries';

export default function Desserts() {
  const { loading, error, data } = useQuery(GET_DESSERTS);
  if (loading) return <h3>Loading Desserts...</h3>
  if (error) return <h3>Something Went Wrong</h3>
  return (
    data.desserts.length > 0 ? <div className="row mt-3">
        {
            data.desserts.map(dessert => (
                <DessertCard key={dessert.id} dessert={dessert}/>
            ))
        }
    </div> : <div>No Desserts</div>
  )
}
