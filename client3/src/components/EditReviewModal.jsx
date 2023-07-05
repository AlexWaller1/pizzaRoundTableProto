import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_REVIEW } from '../queries/reviewQueries';
import { UPDATE_REVIEW } from '../mutations/reviewMutations';
import NewEditReviewIcon from './NewEditReviewIcon';
import ReviewModalIcon from './ReviewModalIcon';
import "./EditReviewModal.css";

export default function EditReviewModal({ review }) {
  
  const [title, setTitle] = useState(review.title);
  const [stars, setStars] = useState("");
  const [text, setText] = useState(review.text);

  const [updateReview] = useMutation(UPDATE_REVIEW, {
    variables: { id: review.id, title, stars, text },
    refetchQueries: [{ query: GET_REVIEW, variables: { id: review.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !stars || stars === "leave a star rating" || !text) {
        return alert("Please Fill Out All Fields");
    }

    updateReview(title, stars, text);
  }
  return (

    <>
    <button type="button" className="btn btn-dark" id="update-image-div" data-bs-toggle="modal" data-bs-target="#editReviewModal">
      <div className="d-flex align-items-center">
        <div id="button-text-div"><h5 className="update-review-btn-text">Update Review</h5></div>
        <div><NewEditReviewIcon/></div>
      </div>
    </button>
    <div className="modal fade" id="editReviewModal" aria-labelledby="editReviewLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content" id="modal-content">
                <div className="modal-header" id="modal-header">
                  <h1 className="modal-title fs-5" id="editReviewModalLabel">Update Review</h1>
                  <ReviewModalIcon/>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div classname="modal-body" id="modal-body">
                    <form onSubmit={ onSubmit }>
                        <div className="mb-3 mt-3" id="review-title">
                            <label className="form-label"><h5>Title:</h5></label>
                            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div className="mb-3" id="review-stars">
                            <label className="form-label"><h5>Stars:</h5></label>
                            <select id="status" className="form-select" value={stars} onChange={(e) => setStars(e.target.value)}>
                                <option value="leave a star rating">leave a star rating</option>
                                <option value="one">1</option>
                                <option value="two">2</option>
                                <option value="three">3</option>
                                <option value="four">4</option>
                                <option value="five">5</option>
                            </select>
                        </div>
                        <div className="mb-3" id="review-text">
                            <label className="form-label"><h5>Review Text:</h5></label>
                            <textarea className="form-control" id="text" value={text} onChange={ (e) => setText(e.target.value)}></textarea>
                        </div>
                        <button type="submit" className="btn btn-dark" id="edit-review-submit-btn" data-bs-dismiss="modal"><h5>{"Submit >>"}</h5></button>
                    </form>
                </div> 
            </div>
        </div>
    </div>
    
     
    </>
    
  )
}
