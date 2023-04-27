import React from 'react';
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';
import "./Footer.css";

export default function Footer() {
  return (
    <div className="mt-5" id="footer-div">
        <TopFooter/>
        <BottomFooter/>
    </div>
  )
}
