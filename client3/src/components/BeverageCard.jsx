import "./ItemCard.css"

export default function BeverageCard({ beverage }) {
  return (
    <div className="col-md-6">
        <div className="card mb-3">
            <div className="card-body" id="beverage-card">
                <div className="d-flex justify-content-between align-items-center" id="beverage-title-and-btn-div">
                    <h4 className="beverage-title">{beverage.name}</h4>
                    <a className="btn btn-dark" href={`/beverages/${beverage.id}`} id="beverage-card-btn"><h5 className="view-item-btn">View</h5></a>
                </div>
                <div id="beverage-card-image-div">
                  <img src={beverage.img} alt="beverage image" id="beverage-card-image"/>
                </div>
                <h4 className="beverage-price">{beverage.price}</h4>
            </div>
        </div>
    </div>
  )
}
