import "./ItemCard.css";
import ViewBtnIcon from "./ViewBtnIcon";

export default function AppetizerCard({ appetizer }) {
  return (
    <div className="col-md-6">
        <div className="card mb-3">
            <div className="card-body" id="appetizer-card-body">
               <div className="d-flex justify-content-between align-items-center">
                  <h4 className="appetizer-title">{ appetizer.name }</h4>
                  <a className="btn btn-dark" href={`/appetizers/${appetizer.id}`}>
                    <div className="d-flex">
                      <h5 className="view-item-btn-text">View</h5>
                      <ViewBtnIcon />
                    </div>
                  </a>
               </div>
               <div id="appetizer-image-div">
                 <img src={appetizer.image} alt="appetizer image" className="appetizer-image"/>
               </div>
               <h4 className="appetizer-price">{appetizer.price}</h4>
            </div>
        </div>
    </div>
  )
}
