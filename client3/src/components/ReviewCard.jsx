import React from 'react';
import "./ReviewCard.css";

export default function ReviewCard({ review }) {
  return (
    <div className="col-md-12">
        <div className="card mb-3">
            <div className="card-body" id="review-card">
                <div className="d-block justify-content-between align-items-center" id="review-content">
                    <a className="btn btn-dark" href={`/reviews/${review.id}`}>View</a>
                    <h3 className="review-title">{ review.title }</h3>
                    <img src={review.stars} alt="review stars" id="review-stars" />
                </div>
            </div>
        </div>
    </div>
  )
}
