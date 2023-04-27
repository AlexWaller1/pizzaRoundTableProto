import React from 'react'
import "./TopFooter.css";

export default function TopFooter() {
  return (
    <div className="d-flex justify-content-around" id="top-footer-div">
        <div className="d-block">
            <h5>Address:</h5>
            <p>3744 Dachshund Path</p>
            <p>Whitehouse Station, New Jersey</p>
            <p>08889</p>
        </div>
        <div className="d-block">
            <h5>Contact Information:</h5>
            <p>908-595-3737</p>
            <p>info@pizzaroundtable.com</p>
        </div>
        <div className="d-block">
            <h5>Our Affiliates:</h5>
            <p>Francesco's Pizza</p>
            <p>Dominick's Pizza</p>
            <p>Pizza Ranch</p>
        </div>
    </div>
  )
}
