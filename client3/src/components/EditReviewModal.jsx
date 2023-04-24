import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_REVIEW } from '../queries/reviewQueries';
import { UPDATE_REVIEW } from '../mutations/reviewMutations';

export default function EditReviewModal({ review }) {
  
  const [title, setTitle] = useState(review.title);
  const [stars, setStars] = useState(review.stars);
  const [text, setText] = useState(review.text);
  return (
    <div>EditReviewModal</div>
  )
}
