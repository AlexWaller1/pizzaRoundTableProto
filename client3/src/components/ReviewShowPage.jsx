import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_REVIEW } from '../queries/reviewQueries';
import EditReviewModal from './EditReviewModal';
import BackBtnArrow from './BackBtnArrow';
import OneStar from './OneStar';
import TwoStar from './TwoStar';
import ThreeStar from './ThreeStar';
import FourStar from './FourStar';
import FiveStar from './FiveStar';
import "./ReviewShowPage.css";

export default function ReviewShowPage({ review }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_REVIEW, {
    variables: { id }
  });
  if (loading) return <h3>Reviews Loading</h3>
  if (error) return <h3>Something Went Wrong</h3>
  return (
    <>
      {
        !loading && !error && (
            <div className="mx-auto w-75 card p-5" id="review-show-page">
               
                <div id="review-info">
                    <h1>{ data.review.title }</h1>
                    <h2>{ data.review.stars === "5" ? <FiveStar/> : data.review.stars === "4" ? <FourStar/> : data.review.stars === "3" ? <ThreeStar/> : data.review.stars === "2" ? <TwoStar/> : <OneStar/>}</h2>
                    <h3>{ data.review.text }</h3>
                </div>
                <div className="d-flex mt-3">
                    <EditReviewModal review={data.review} />
                    <Link to="/reviews" className="btn btn-dark btn-sm w-25 d-inline ms-auto" id="review-back-btn" >
                      <div className="d-flex">
                        <BackBtnArrow />
                        <h5 className="review-card-back-btn">Back</h5>
                      </div>
                    </Link>
                </div>
            </div>
        )
      }
    </>
  )
}
