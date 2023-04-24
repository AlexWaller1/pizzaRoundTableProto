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
    }
  return (
    <div>AddReviewModal</div>
  )
}
