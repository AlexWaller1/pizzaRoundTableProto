import "./ItemCard.css"
import ViewBtnIcon from "./ViewBtnIcon"

export default function DessertCard({ dessert }) {
  return (
    <div className="col-md-6">
        <div className="card mb-3">
            <div className="card-body" id="dessert-card-div">
                <div className="d-flex justify-content-between align-content-center" id="dessert-name-and-btn-div">
                    <h4 className="dessert-title">{dessert.name}</h4>
                    <a className="btn btn-dark" href={`/desserts/${dessert.id}`}>
                      <div className="d-flex">
                        <h5 className="view-item-btn-text">View</h5>
                        <ViewBtnIcon />
                      </div>
                    </a>
                </div>
                <img src={dessert.image} alt="dessert image" id="dessert-image"/>
                <h4 className="dessert-price">{dessert.price}</h4>
            </div>
        </div>
    </div>
  )
}
