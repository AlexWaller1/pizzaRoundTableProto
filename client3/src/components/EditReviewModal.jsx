import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_REVIEW } from '../queries/reviewQueries';
import { UPDATE_REVIEW } from '../mutations/reviewMutations';

export default function EditReviewModal({ review }) {
  
  const [title, setTitle] = useState(review.title);
  const [stars, setStars] = useState(review.stars);
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
    <div>EditReviewModal</div>
  )
}
