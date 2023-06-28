import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DESSERT } from '../queries/dessertQueries';
import BackBtnArrow from './BackBtnArrow';
import CartBtnIcon from './CartBtnIcon';
import DessertImage1 from './DessertImage1';
import DessertImage2 from './DessertImage2';
import DessertImage3 from './DessertImage3';
import DessertImage4 from './DessertImage4';
import "./ShowPage.css";

export default function DessertShowPage({ addCartItem }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DESSERT, {
    variables: { id }
  });

  if (loading) return <h3>Dessert Loading...</h3>
  if (error) return <h3>Something Went Wrong</h3>

  return (
    <>
      {
        !loading && !error && (
            <div className="mx-auto w-75 card p-5" id="dessert-show-page-div">
                
                <div className="d-flex justify-content-between" id="dessert-image-and-info-div">
                    <div id="dessert-additional-info-div">
                        <h1>{ data.dessert.name }</h1>
                        <h3>{ data.dessert.description }</h3>
                        <h2>{ `$${data.dessert.price}` }</h2>
                    </div>
                    <div id="dessert-image-div">
                        { data.dessert.name === "Chocolate Mousse Cake" ? <DessertImage1 width="800px" height="400px"/> : data.dessert.name === "Tiramasu" ? <DessertImage2 width="800px" height="400px"/> : data.dessert.name === "Cannoli" ? <DessertImage3 width="800px" height="400px"/> : data.dessert.name === "Raspberry Cheese Cake" ? <DessertImage4 width="800px" height="400px"/> : ""}
                    </div>
                </div>
                <div className="d-flex" id="dessert-show-page-btns-div">
                  <Link to="/desserts" className="btn btn-dark btn-sm w-25 d-inline ms-auto mt-15" id="desserts-back-btn">
                     <div className="d-flex" id="backBtnDiv">
                       <BackBtnArrow />
                       <h5 className="back-btn-text">Back</h5> 
                     </div>
                  </Link>
                  <button className='btn btn-dark btn-small w-25 d-inline ms-auto mb-20' id="dessert-add-to-cart-btn" onClick={() => addCartItem(data.dessert)}>
                    <div className="d-flex">
                      <h5 className="add-to-cart-btn-text">Add to Cart</h5>
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
