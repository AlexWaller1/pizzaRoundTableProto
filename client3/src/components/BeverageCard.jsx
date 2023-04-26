
export default function BeverageCard({ beverage }) {
  return (
    <div className="col-md-6">
        <div className="card mb-3">
            <div className="card-body" id="beverage-card">
                <div className="d-flex justify-content-between align-items-center" id="beverage-title-and-btn-div">
                    <h5 className="beverage-title">{beverage.name}</h5>
                    <a className="btn btn-dark" href={`/beverages/${beverage.id}`} id="beverage-card-btn">View</a>
                </div>
                <div id="beverage-card-image-div">
                  <img src={beverage.img} alt="beverage image" id="beverage-card-image"/>
                </div>
                <h6 className="beverage-price">{beverage.price}</h6>
            </div>
        </div>
    </div>
  )
}
