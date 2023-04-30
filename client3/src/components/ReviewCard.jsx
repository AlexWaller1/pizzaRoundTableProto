import React from 'react';
import "./ReviewCard.css";
import ViewBtnIcon from './ViewBtnIcon';

export default function ReviewCard({ review }) {
  return (
    <div className="col-md-12">
        <div className="card mb-3">
            <div className="card-body" id="review-card">
                <div className="d-flex justify-content-between align-items-center" id="review-content">
                    <h3 className="review-title">{ review.title }</h3>
                    <img src={review.stars} alt="review stars" id="review-stars" />
                    <a className="btn btn-dark" href={`/reviews/${review.id}`}>
                        <div className="d-flex">
                          <h5 className="view-review-btn-text">View</h5>
                          <ViewBtnIcon />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
