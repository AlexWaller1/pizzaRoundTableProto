import React from 'react'
import HomePageImage1 from './HomePageImage1';
import HomePageImage2 from './HomePageImage2';
import HomePageImage3 from './HomePageImage3';
import PizzaSlice1 from './PizzaSlice1';
import PizzaSlice2 from './PizzaSlice2';
import PizzaSlice3 from './PizzaSlice3';
import PizzaSlice4 from './PizzaSlice4';
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div id="home-page-div">
        <div id="slice-2">
          <PizzaSlice2 height="200px" width="200px"/>
        </div>
        <div>
          <div className="card mb-3">
            <div id="home-page-nested-div-1" className="card-body">
              <h1 id="home-page-header-1">The Best Pizza in New Jersey!</h1>
              <HomePageImage1 height="800px" width="1600px"/>
              <h3 className="">
                The tradition and evolution of Pizza are genuinely exciting, bringing 
                together timeless recipes with cutting edge innovation. We are proud to 
                provide Pizzas using untouched recipes from the old days in Italy, while also
                providing pizzas that honor the tradition of Pizza Shops around the world
                that contribute their unique creativity <br/> to move Pizza forward.
              </h3>
           </div>
          </div>
        </div>
        
        <div id="slice-1">
          <PizzaSlice1 height="200px" width="200px"/>
        </div>
        <div>
          <div className="card mb-3">
            <div id="home-page-nested-div-2" className="card-body">
              <h1 id="home-page-header-div-2">All Dough and Sauce Made In House!</h1>
              <HomePageImage2 height="800px" width="1600px"/>
              <h3 className="crust-ingredients-text">
                We believe having an exceptional crust is the key to any great pizza.
                All pizza dough is made fresh in house because we never want a customer
                getting anything less than the best. The same goes for our sauce. No premade
                cans or bags for us. We crush our own tomatoes and add all fresh ingredients
                ourselves.
              </h3>
            </div>
          </div>
        </div>
        
        <div id="slice-4">
          <PizzaSlice4 height="200px" width="200px"/>
        </div>
        <div>
          <div className="card mb-3">
            <div id="home-page-nested-div-3" className='card-body'>
              <h1>All Meats and Cheeses are fresh from our affiliate K & S Italian Specialties</h1>
              <HomePageImage3 height="800px" width="1600px" />
              <h3>
                  We understand the importance of premium ingredients and we know
                  that local businesses are the best places to find quality and
                  consistency. We have partnered with what we believe to be the best
                  Italian deli around to provide us with the highest standard of
                  Italian meats and cheeses.
              </h3>
            </div>
          </div>
        </div>
        <div id="slice-3">
          <PizzaSlice3 height="200px" width="200px"/>
        </div>
      </div>
    </>
  )
}
