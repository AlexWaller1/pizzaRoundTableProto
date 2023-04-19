import React, { useState, useId } from 'react'
import { BrowswerRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pizzas from './Pizzas';
import Appetizers from './Appetizers';
import Beverages from './Beverages';
import Desserts from './Desserts';
import PizzaShowPage from './PizzaShowPage';
import AppetizerShowPage from './AppetizerShowPage';
import BeverageShowPage from './BeverageShowPage';
import DessertShowPage from './DessertShowPage';

export default function RouterLinks({ cart, addCartItem, deleteCartItem }) {

  return (
    <Routes>
        <Route path="/pizzas" element={<Pizzas/>} />
        <Route path="/pizzas/:id" element={<PizzaShowPage cart={ cart } addCartItem={ addCartItem } deleteCartItem={ deleteCartItem }/>}/>
        <Route path="/appetizers" element={<Appetizers/>}/>
        <Route path="/appetizers/:id" element={<AppetizerShowPage cart={ cart } addCartItem={ addCartItem } deleteCartItem={ deleteCartItem }/>}/>
        <Route path="/beverages" element={<Beverages/>} />
        <Route path="/beverages/:id" element={<BeverageShowPage cart={ cart } addCartItem={ addCartItem } deleteCartItem={ deleteCartItem }/>}/>
        <Route path="/desserts" element={<Desserts/>}/>
        <Route path="/desserts/:id" element={<DessertShowPage cart={ cart } addCartItem={ addCartItem } deleteCartItem={ deleteCartItem } />} />
    </Routes>
  )
}
