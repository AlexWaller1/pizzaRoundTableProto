import "./ItemCard.css"
import ViewBtnIcon from "./ViewBtnIcon";
import ClassicItalianPizzaImage from "./ClassicItalianPizzaImage";
import ClassicItalianPizzaImage2 from "./ClassicItalianPizzaImage2";
import ClassicItalianPizzaImage3 from "./ClassicItalianPizzaImage3";
import ClassicItalianPizzaImage4 from "./ClassicItalianPizzaImage4";
import ClassicItalianPizzaImage5 from "./ClassicItalianPizzaImage5";
import ClassicItalianPizzaImage6 from "./ClassicItalianPizzaImage6";

export default function PizzaCard({ pizza }) {
  return (
    <div className="col-md-6">
      {/* column medium with that takes up third of screen (bootstrap sees screen twelfths, so 12 / 4 === 3) */}
        <div className="card mb-3">
          { /* card bootstrap class with a margin-bottom of 3 */}
            <div className="card-body" id="pizza-card-div">
                <div className="d-flex justify-content-between align-items-center" id="pizza-name-and-btn-div">
                  <h1 className="pizza-title">{pizza.name}</h1>
                  <a className="btn btn-dark" href={`/pizzas/${pizza.id}`}>
                    <div className="d-flex">
                      <h5 className="view-item-btn-text">View</h5>
                      <ViewBtnIcon/>
                    </div>
                  </a>
                </div>
                {pizza.name === "Stuffed Pizza" ? <ClassicItalianPizzaImage width="700px" height="600px"/> : pizza.name === "Lake Cushetunk Special!" ? <ClassicItalianPizzaImage2 width={"700px"} height={"600px"} /> :  pizza.name === "Eggplant Parmesean Pizza" ? <ClassicItalianPizzaImage3 width={"700px"} height={"600px"} /> : pizza.name === "Sicilian Pizza" ? <ClassicItalianPizzaImage4 width={"700px"} height={"600px"}/> : pizza.name === "White Pizza" ? <ClassicItalianPizzaImage5 width="700px" height="600px" /> : pizza.name === "Meat Lover's Pizza" ? <ClassicItalianPizzaImage6 width="700px" height="600px" /> : ""}
                <p className="pizza-price">
                   <h2>{`$${pizza.price}`}</h2>
                </p>
            </div>
        </div>
    </div>
  )
}
