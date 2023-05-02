import React from 'react'
import "./TopFooter.css";
import FooterAddressIcon from './FooterAddressIcon';
import FooterContactsIcon from './FooterContactsIcon';

export default function TopFooter() {
  return (
    <div className="d-flex justify-content-around" id="top-footer-div">
        <div className="d-block">
            <div className="d-inline-flex"><FooterAddressIcon/><h5 className="addressfooter-header">Address:</h5></div>
            <p>- 3744 Dachshund Path</p>
            <p>- Whitehouse Station, New Jersey</p>
            <p>- 08889</p>
        </div>
        <div className="d-block">
            <div className="d-inline-flex"><FooterContactsIcon/><h5 className="contact-information-footer-header">Contact Information:</h5></div>
            <p>- 908-595-3737</p>
            <p>- info@pizzaroundtable.com</p>
        </div>
        <div className="d-block">
            <h5>Our Affiliates:</h5>
            <p>- Francesco's Pizza</p>
            <p>- Dominick's Pizza</p>
            <p>- Pizza Ranch</p>
        </div>
    </div>
  )
}
