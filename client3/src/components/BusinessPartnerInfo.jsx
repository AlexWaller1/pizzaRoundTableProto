import { FaEnvelope, FaPhone } from "react-icons/fa"
// will end up not needing this component
// however it is a component used on a Pizza show page where the businessPartner
// property of a Pizza object is passed in as a prop and then the 
// Business Partner Info will display when the component is called
// on the Pizza show page
export default function BusinessPartnerInfo({ businessPartner }) {
  return (
    <>
      <h5 className="mt-5">Business Partner Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
            <FaPhone className="icon" /> {businessPartner.name}
        </li>
        <li className="list-group-item">
            <FaEnvelope className="icon" /> {businessPartner.email}
        </li>
        <li className="list-group-item">
            <FaPhone className="icon" /> {businessPartner.phone}
        </li>
      </ul>
    </>
  )
}
