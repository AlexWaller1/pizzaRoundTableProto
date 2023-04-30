import "./ItemCard.css"
import ViewBtnIcon from "./ViewBtnIcon";

export default function PizzaCard({ pizza }) {
  return (
    <div className="col-md-6">
      {/* column medium with that takes up third of screen (bootstrap sees screen twelfths, so 12 / 4 === 3) */}
        <div className="card mb-3">
          { /* card bootstrap class with a margin-bottom of 3 */}
            <div className="card-body" id="pizza-card-div">
                <div className="d-flex justify-content-between align-items-center" id="pizza-name-and-btn-div">
                  <h4 className="pizza-title">{pizza.name}</h4>
                  <a className="btn btn-dark" href={`/pizzas/${pizza.id}`}>
                    <div className="d-flex">
                      <h5 className="view-item-btn-text">View</h5>
                      <ViewBtnIcon/>
                    </div>
                  </a>
                </div>
                <img src={pizza.image} alt="pizza-image" id="pizza-image" />
                <p className="pizza-price">
                   <h4>{pizza.price}</h4>
                </p>
            </div>
        </div>
    </div>
  )
}
