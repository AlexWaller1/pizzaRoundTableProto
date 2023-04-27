import "./ItemCard.css";

export default function AppetizerCard({ appetizer }) {
  return (
    <div className="col-md-6">
        <div className="card mb-3">
            <div className="card-body" id="appetizer-card-body">
               <div className="d-flex justify-content-between align-items-center">
                  <h4 className="appetizer-title">{ appetizer.name }</h4>
                  <a className="btn btn-dark" href={`/appetizers/${appetizer.id}`}><h5 className="view-item-btn">View</h5></a>
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
