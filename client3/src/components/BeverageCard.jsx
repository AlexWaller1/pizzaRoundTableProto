import "./ItemCard.css"
import ViewBtnIcon from "./ViewBtnIcon"
import PickerelColaLogo from "./PickerelColaLogo";
import DietPickerelColaLogo from "./DietPickerelColaLogo";

export default function BeverageCard({ beverage }) {
  return (
    <div className="col-md-6">
        <div className="card mb-3">
            <div className="card-body" id="beverage-card">
                <div className="d-flex justify-content-between align-items-center" id="beverage-title-and-btn-div">
                    <h1 className="beverage-title">{beverage.name}</h1>
                    <a className="btn btn-dark" href={`/beverages/${beverage.id}`} id="beverage-card-btn">
                      <div className="d-flex">
                        <h5 className="view-item-btn-text">View</h5>
                        <ViewBtnIcon />
                      </div>
                    </a>
                </div>
                <div id="beverage-card-image-div">
                  {beverage.name === "Pickerel Cola" ? <PickerelColaLogo height={400} width={400} /> : beverage.name === "Diet Pickerel Cola" ? <DietPickerelColaLogo height={400} width={400} /> : ""}
                </div>
                <h4 className="beverage-price">{`$${beverage.price}`}</h4>
            </div>
        </div>
    </div>
  )
}
