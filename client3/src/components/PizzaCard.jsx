export default function PizzaCard({ pizza }) {
  return (
    <div className="col-md-4">
      {/* column medium with that takes up third of screen (bootstrap sees screen twelfths, so 12 / 4 === 3) */}
        <div className="card mb-3">
          { /* card bootstrap class with a margin-bottom of 3 */}
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="pizza-title">{pizza.name}</h5>
                  <a className="btn btn-light" href={`/pizzas/${pizza.id}`}>View</a>
                </div>
                <p className="small">
                    Status: <strong>{pizza.status}</strong>
                </p>
            </div>
        </div>
    </div>
  )
}
