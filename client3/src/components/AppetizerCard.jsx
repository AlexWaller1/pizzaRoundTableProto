

export default function AppetizerCard({ appetizer }) {
  return (
    <div className="col-md-4">
        <div className="card mb-3">
            <div className="card-body">
               <div className="d-flex justify-content-between align-items-center">
                  <h5 className="appetizer-title">{ appetizer.name }</h5>
                  <a className="btn btn-light" href={`/appetizers/${appetizer.id}`}>View</a>
               </div>
               <img src={appetizer.image} alt="appetizer image" className="appetizer-image"/>
               <h6 className="appetizer-price">{appetizer.price}</h6>
            </div>
        </div>
    </div>
  )
}
