import "./ItemCard.css";
import ViewBtnIcon from "./ViewBtnIcon";
import AppetizerImage1 from "./AppetizerImage1";
import AppetizerImage2 from "./AppetizerImage2";
import AppetizerImage3 from "./AppetizerImage3";
import AppetizerImage4 from "./AppetizerImage4";

export default function AppetizerCard({ appetizer }) {
  return (
    <div className="col-md-6">
        <div className="card mb-3">
            <div className="card-body" id="appetizer-card-body">
               <div className="d-flex justify-content-between align-items-center">
                  <h1 className="appetizer-title">{ appetizer.name }</h1>
                  <a className="btn btn-dark" href={`/appetizers/${appetizer.id}`}>
                    <div className="d-flex">
                      <h5 className="view-item-btn-text">View</h5>
                      <ViewBtnIcon />
                    </div>
                  </a>
               </div>
               <div id="appetizer-image-div">
                 { appetizer.name === "Grilled Calamari" ? <AppetizerImage1 height="400px" width="800px" /> : appetizer.name === "Bruschetta" ? <AppetizerImage2 height="400px" width="800px" /> : appetizer.name === "Fried Scallops" ? <AppetizerImage3 height="400px" width="800px" /> : appetizer.name === "Antipasto" ? <AppetizerImage4 height="400px" width="800px" /> : ""}
               </div>
               <h4 className="appetizer-price">{`$${appetizer.price}`}</h4>
            </div>
        </div>
    </div>
  )
}
