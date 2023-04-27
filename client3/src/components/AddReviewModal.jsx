import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../queries/reviewQueries';
import { ADD_REVIEW } from '../mutations/reviewMutations';
import "./AddReviewModal.css"

export default function AddReviewModal() {
    const [title, setTitle] = useState("");
    const [stars, setStars] = useState("1");
    const [text, setText] = useState("");

    const [addReview] = useMutation(ADD_REVIEW, {
        variables: { title, stars, text },
        update(cache, { data: { addReview } }) {
            const { reviews } = cache.readQuery({ query: GET_REVIEWS });
            cache.writeQuery({
                query: GET_REVIEWS,
                data: { reviews: [ reviews, addReview] }
            });
        }
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if(title === "" || stars === "" || stars === "leave a star rating" || text === "") {
            return alert("Please Fill in all Fields");
        }
        console.log("onSubmit");
        addReview(title, stars, text);

        setTitle("");
        setStars("");
        setText("");
    }
    
  return (
    <>
      {  
        <>
        { /* Button to have modal appear */}
          <button type="button" className="btn btn-dark" id="new-review-btn" data-bs-toggle="modal" data-bs-target="#addReviewModal">
            <div className="d-flex align-items-center">
                <div><h4>New Review</h4></div>
                <div className="button-image-div"></div>
            </div>
          </button>
          
          {/* Add Review Modal */}
          <div className="modal fade" id="addReviewModal" aria-labelledby="addReviewLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="addReviewModalLabel">New Review</h1>
                    <button type="button" className="btn-close" id="modal-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3" id="review-title">
                            <label className="form-label"><h5>Title</h5></label>
                            <input type="text" className="form-control" id="name" value={title} onChange={ (e) => setTitle(e.target.value) } />
                        </div>
                        <div className="mb-3" id="review-stars">
                            <label className="form-label"><h5>Stars</h5></label>
                            <select id="stars" className="form-select" value={stars} onChange={ (e) => setStars(e.target.value) }>
                                <option value="leave a star rating">leave a star rating</option>
                                <option value="one">1</option>
                                <option value="two">2</option>
                                <option value="three">3</option>
                                <option value="four">4</option>
                                <option value="five">5</option>
                            </select>
                        </div>
                        <div className="mb-3" id="review-text">
                            <label className="form-label"><h5>Review Text</h5></label>
                            <textarea className="form-control" id="text" value={text} onChange={ (e) => setText(e.target.value) }></textarea>
                        </div>
                        <button type="submit" className="btn btn-danger" id="new-review-modal-submit-btn" data-bs-dismiss="modal">Submit</button>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}
