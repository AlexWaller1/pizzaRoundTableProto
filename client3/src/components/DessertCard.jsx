
export default function DessertCard({ dessert }) {
  return (
    <div className="col-md-4">
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-content-center">
                    <h5 className="dessert-title">{dessert.name}</h5>
                    <a className="btn btn-light" href={`/desserts/${dessert.id}`}>View</a>
                </div>
                <img src={dessert.image} alt="dessert image" />
                <h6 className="dessert-price">{dessert.price}</h6>
            </div>
        </div>
    </div>
  )
}
