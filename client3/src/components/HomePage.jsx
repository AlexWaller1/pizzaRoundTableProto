import React from 'react'
import HomePageImage1 from './HomePageImage1';
import HomePageImage2 from './HomePageImage2';
import HomePageImage3 from './HomePageImage3';
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div id="home-page-div">
        <div id="home-page-nested-div-1">
          <h2 id="home-page-header-div">The Best Pizza in New Jersey!</h2>
          <HomePageImage1 height="400px" width="800px"/>
        </div>
        <div id="home-page-nested-div-2">
          <h3 id="home-page-header-div-2">Pizza, Appetizers, Desserts, and Beverages</h3>
          <HomePageImage2 height="400px" width="800px"/>
        </div>
        <div id="home-page-nested-div-2">
          <h6 id="home-page-text">Pizza Roundtable offers Italian Pizza unique to Whitehouse Station of New Jersey.
              Offering excellent, homemade crust with the fineset cheeses, meats, and sauces, we
              offer the Italian classics and go to great lengths to ensure our customers get the 
              best and freshest ingredients.
              <HomePageImage3 height="400px" width="800px" />
          </h6>
        </div>
       
      </div>
    </>
  )
}
