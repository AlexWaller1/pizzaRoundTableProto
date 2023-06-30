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
          <h1 id="home-page-header-1">The Best Pizza in New Jersey!</h1>
          <HomePageImage1 height="800px" width="1600px"/>
        </div>
        <div id="home-page-nested-div-2">
          <h1 id="home-page-header-div-2">All Dough and Sauce Made In House!</h1>
          <HomePageImage2 height="800px" width="1600px"/>
        </div>
        <div id="home-page-nested-div-2">
          <h6 id="home-page-text">Pizza Roundtable offers Italian Pizza unique to Whitehouse Station of New Jersey.
              Offering excellent, homemade crust with the fineset cheeses, meats, and sauces, we
              offer the Italian classics and go to great lengths to ensure our customers get the 
              best and freshest ingredients.
              <HomePageImage3 height="800px" width="1600px" />
          </h6>
        </div>
       
      </div>
    </>
  )
}
