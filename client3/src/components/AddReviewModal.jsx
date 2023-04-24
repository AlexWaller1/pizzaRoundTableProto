import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../queries/reviewQueries';
import { ADD_REVIEW } from '../mutations/reviewMutations';

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

    const { loading, error, data } = useQuery(GET_REVIEWS);

    const onSubmit = (e) => {
        e.preventDefault();
        if(title === "" || stars === "" || text === "") {
            return alert("Please Fill in all Fields");
        }
        console.log("onSubmit");
        addReview(title, stars, text);

        setTitle("");
        setStars("");
        setText("");
    }
    if (loading) return null;
    if (error) return "Something Went Wrong";
  return (
    <>
      { !loading && !error && (
        <>
        { /* Button to have modal appear */}
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addReviewModal">
            <div className="d-flex align-items-center">
                <div>New Review</div>
                <div className="button-image-div"></div>
            </div>
          </button>
          
          {/* Add Review Modal */}
          <div className="modal fade" id="addReviewModal" aria-labelledby="addReviewLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="addReviewModalLabel">New Review</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">Close Modal</button>
                </div>
                <div className="modal-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" id="name" value={ (e) => setTitle(e.target.value) } />
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </>
  )
}
