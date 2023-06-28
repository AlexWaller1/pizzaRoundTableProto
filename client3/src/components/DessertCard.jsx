import "./ItemCard.css"
import ViewBtnIcon from "./ViewBtnIcon"
import DessertImage1 from "./DessertImage1";
import DessertImage2 from "./DessertImage2";
import DessertImage3 from "./DessertImage3";
import DessertImage4 from "./DessertImage4";

export default function DessertCard({ dessert }) {
  return (
    <div className="col-md-6">
        <div className="card mb-3">
            <div className="card-body" id="dessert-card-div">
                <div className="d-flex justify-content-between align-content-center" id="dessert-name-and-btn-div">
                    <h1 className="dessert-title">{dessert.name}</h1>
                    <a className="btn btn-dark" href={`/desserts/${dessert.id}`}>
                      <div className="d-flex">
                        <h5 className="view-item-btn-text">View</h5>
                        <ViewBtnIcon />
                      </div>
                    </a>
                </div>
                { dessert.name === "Chocolate Mousse Cake" ? <DessertImage1 width="800px" height="400px"/> : dessert.name === "Tiramasu" ? <DessertImage2 width="800px" height="400px"/> : dessert.name === "Cannoli" ? <DessertImage3 width="800px" height="400px"/> : dessert.name === "Raspberry Cheese Cake" ? <DessertImage4 width="800px" height="400px"/> : ""}
                <h4 className="dessert-price">{`$${dessert.price}`}</h4>
            </div>
        </div>
    </div>
  )
}
