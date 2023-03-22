import { FaEnvelope, FaPhone } from "react-icons/fa"

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
