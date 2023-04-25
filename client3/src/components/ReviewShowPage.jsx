import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_REVIEW } from '../queries/reviewQueries';
import EditReviewModal from './EditReviewModal';

export default function ReviewShowPage({ review }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_REVIEW, {
    variables: { id }
  });
  if (loading) return <h3>Reviews Loading</h3>
  if (error) return <h3>Something Went Wrong</h3>
  return (
    <>
      {
        !loading && !error && (
            <div className="mx-auto w-75 card p-5">
                <Link to="/reviews" className="btn btn-light btn-sm w-25 d-inline ms-auto">
                    Back
                </Link>
                <div>
                    <h1>{ data.review.title }</h1>
                    <h2>{ data.review.stars }</h2>
                    <h3>{ data.review.text }</h3>
                </div>
                <div>
                    <EditReviewModal review={data.review} />
                </div>
            </div>
        )
      }
    </>
  )
}
