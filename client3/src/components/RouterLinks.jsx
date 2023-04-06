import React from 'react'
import { BrowswerRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pizzas from './Pizzas';
import Appetizers from './Appetizers';
import Beverages from './Beverages';
import Desserts from './Desserts';
import PizzaShowPage from './PizzaShowPage';
import AppetizerShowPage from './AppetizerShowPage';
import BeverageShowPage from './BeverageShowPage';
import DessertShowPage from './DessertShowPage';

export default function RouterLinks() {
  return (
    <Routes>
        <Route path="/pizzas" element={<Pizzas/>} />
        <Route path="/pizzas/:id" element={<PizzaShowPage/>}/>
        <Route path="/appetizers" element={<Appetizers/>}/>
        <Route path="/appetizers/:id" element={<AppetizerShowPage/>}/>
        <Route path="/beverages" element={<Beverages/>} />
        <Route path="/beverages/:id" element={<BeverageShowPage/>}/>
        <Route path="/desserts" element={<Desserts/>}/>
        <Route path="/desserts/:id" element={<DessertShowPage/>} />
    </Routes>
  )
}
