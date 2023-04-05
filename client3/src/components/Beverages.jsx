import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_BEVERAGES } from '../queries/beverageQueries';
import BeverageCard from './BeverageCard';

export default function Beverages() {
  const { loading, error, data } = useQuery(GET_BEVERAGES);
  if (loading) return <h3>Loading Beverages</h3>
  if (error) return <h3>Something Went Wrong</h3>
  return (
    <>
      {
        data.beverages.length > 0 ? <div className="row mt-3">
            {
                data.beverages.map(beverage => (
                    <BeverageCard key={beverage.id} beverage={beverage}/>
                ))
            }
        </div> : <div></div>
      }
    </>
  )
}
