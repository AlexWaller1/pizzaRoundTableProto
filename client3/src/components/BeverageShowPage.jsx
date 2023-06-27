import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BEVERAGE } from '../queries/beverageQueries';
import BackBtnArrow from './BackBtnArrow';
import CartBtnIcon from './CartBtnIcon';
import PickerelColaLogo from './PickerelColaLogo';
import DietPickerelColaLogo from './DietPickerelColaLogo';
import "./ShowPage.css";

export default function BeverageShowPage({ addCartItem }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BEVERAGE, {
    variables: { id }
  })

  if (loading) return <h3>Beverage Loading...</h3>
  if (error) return <h3>Something Went Wrong</h3>

  return (
    <>
      {
        !loading && !error && (
            <div className="mx-auto w-75 card p-5" id="beverage-show-page-div">
                <div className="d-flex justify-content-between">
                    <div id="beverage-show-page-additional-info-div">
                        <h1>{ data.beverage.name }</h1>
                        <h3>{ data.beverage.description }</h3>
                        <h2>{ data.beverage.price }</h2>
                    </div>
                    <div id="beverage-show-page-image-div">
                        { data.beverage.name === "Pickerel Cola" ? <PickerelColaLogo height={400} width={400}/> : data.beverage.name === "Diet Pickerel Cola" ? <DietPickerelColaLogo height={400} width={400}/> : ""}
                    </div>
                </div>
                <div className="d-flex" id="beverage-show-page-btns-div">
                  <Link to="/beverages" className="btn btn-dark btn-sm w-25 d-inline ms-auto" id="beverage-back-btn">
                    <div className="d-flex" id="backBtnDiv">
                      <BackBtnArrow />
                      <h5 className="back-btn-text">Back</h5>
                    </div> 
                  </Link>
                  <button className="btn btn-dark btn-small w-25 d-inline ms-auto mb-20" id="beverage-add-to-cart-btn" onClick={() => addCartItem(data.beverage)}>
                    <div className="d-flex">
                      <h5 className="add-to-cart-btn-text">Add to Cart</h5>
                      <CartBtnIcon />
                    </div>
                  </button>
                </div>
            </div>
        )
      }
    </>
  )
}
