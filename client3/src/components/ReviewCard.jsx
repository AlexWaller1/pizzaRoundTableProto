import React from 'react'

export default function ReviewCard({ review }) {
  return (
    <div className="col-md-4">
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="review-title">{ review.title }</h3>
                    <img src={review.stars} alt="review stars" />
                    <h6 className="review-text">{ review.text }</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
