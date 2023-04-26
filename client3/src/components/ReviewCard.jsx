import React from 'react';

export default function ReviewCard({ review }) {
  return (
    <div className="col-md-12">
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-block justify-content-between align-items-center">
                    <a className="btn btn-light" href={`/reviews/${review.id}`}>View</a>
                    <h3 className="review-title">{ review.title }</h3>
                    <img src={review.stars} alt="review stars" />
                </div>
            </div>
        </div>
    </div>
  )
}
