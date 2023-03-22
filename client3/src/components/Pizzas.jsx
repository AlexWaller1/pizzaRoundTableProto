import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PIZZAS } from "../queries/pizzaQueries";
import PizzaCard from "./PizzaCard";


export default function Pizzas() {
    const { loading, error, data } = useQuery(GET_PIZZAS);
    if (loading) return <Spinner />
    if(error) return <p>Something Went Wrong</p>

    return (
        <>
          {data.pizzas.length > 0 ? (
            <div className="row mt-3">
                {data.pizzas.map((pizza) => (
                    <PizzaCard key={pizza.id} pizza={pizza}/>
                ))}
            </div>
          ) :
          (<p>No Pizzas</p>)}
        </>
    )
}