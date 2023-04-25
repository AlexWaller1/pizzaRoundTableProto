import React from 'react';
import EditReviewModal from './EditReviewModal';

export default function ReviewCard({ review }) {
  return (
    <div className="col-md-12">
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-block justify-content-between align-items-center">
                    <div className="d-flex">
                      <h3 className="review-title">{ review.title }</h3>
                      <EditReviewModal review={review} />
                    </div>
                    <img src={review.stars} alt="review stars" />
                    <h6 className="review-text">{ review.text }</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
