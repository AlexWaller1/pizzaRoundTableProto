
export default function BeverageCard({ beverage }) {
  return (
    <div className="col-md-6">
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="beverage-title">{beverage.name}</h5>
                    <a className="btn btn-light" href={`/beverages/${beverage.id}`}>View</a>
                </div>
                <img src={beverage.img} alt="beverage image" />
                <h6 className="beverage-price">{beverage.price}</h6>
            </div>
        </div>
    </div>
  )
}
