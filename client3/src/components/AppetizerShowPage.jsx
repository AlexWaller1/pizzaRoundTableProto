import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_APPETIZER } from '../queries/appetizerQueries';
import BackBtnArrow from './BackBtnArrow';
import CartBtnIcon from './CartBtnIcon';
import AppetizerImage1 from './AppetizerImage1';
import AppetizerImage2 from './AppetizerImage2';
import AppetizerImage3 from './AppetizerImage3';
import AppetizerImage4 from './AppetizerImage4';
import "./ShowPage.css"

export default function AppetizerShowPage({ addCartItem }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_APPETIZER, {
    variables: { id }
  })

  if (loading) return <h3>Appetizer Loading</h3>
  if (error) return <h3>Something Went Wrong</h3>

  return (
    <>
      {
        !loading && !error && (
            <div className="mx-auto w-75 card p-5" id="appetizer-show-page-div">
                <div className="d-flex justify-content-between" id="appetizer-info-div">
                    <div id="appetizer-additional-info-div">
                        <h1>{ data.appetizer.name }</h1>
                        <h3>{ data.appetizer.description }</h3>
                        <h2>{ `$${data.appetizer.price}` }</h2>
                    </div>
                    <div id="appetizer-image-div">
                        { data.appetizer.name === "Grilled Calamari" ? <AppetizerImage1 height="500px" width="1000px"/> : data.appetizer.name === "Bruschetta" ? <AppetizerImage2 height="500px" width="1000px" /> : data.appetizer.name === "Fried Scallops" ? <AppetizerImage3 height="500px" width="1000px"/> : data.appetizer.name === "Antipasto" ? <AppetizerImage4 height="500px" width="1000px"/> : ""}
                    </div>
                </div>
                <div className="d-flex" id="appetizer-show-page-div">
                  <Link to="/appetizers" className='btn btn-dark btn-sm w-25 d-inline ms-auto' id="appetizer-show-page-back-btn">
                     <div className="d-flex" id="backBtnDiv">
                       <BackBtnArrow />
                       <h5 className="back-btn-text">Back</h5>
                     </div> 
                  </Link>
                  <button className='btn btn-dark btn-small w-25 d-inline ms-auto' id="appetizer-add-to-cart-btn" onClick={() => addCartItem(data.appetizer)}>
                    <div className="d-flex">
                      <h5 className="add-to-cart-btn-text">Add To Cart</h5>
                      <CartBtnIcon/>
                    </div>
                  </button>
                </div>
            </div>
        )
      }
    </>
  )
}
