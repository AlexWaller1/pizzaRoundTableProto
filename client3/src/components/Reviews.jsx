import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from '../queries/reviewQueries';
import ReviewCard from './ReviewCard';
import AddReviewModal from './AddReviewModal';
import "./Reviews.css"

export default function Reviews() {
  const { loading, error, data } = useQuery(GET_REVIEWS);
  if(loading) return <h3>Loading Reviews</h3>
  if(error) return <h3>Something Went Wrong</h3>
  return (
    <>
      <AddReviewModal />
      {
        data.reviews.length > 0 ? <div className="row mt-3" id="all-reviews-page">
            {
                data.reviews.map(review => (
                    <ReviewCard key={ review.id } review={ review } />
                ))
            }
        </div> : <div>No Reviews</div>
    }</>
  )
}
