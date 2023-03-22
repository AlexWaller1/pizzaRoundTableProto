import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { DELETE_PIZZA } from "../mutations/pizzaMutations";
import { GET_PIZZAS } from "../queries/pizzaQueries";
import { useMutation } from "@apollo/client";

export default function DeletePizzaBtn({ pizzaId }) {
    const navigate = useNavigate();

    const [deletePizza] = useMutation(DELETE_PIZZA, {
      variables: { id: pizzaId },
      onCompleted: () => navigate("/"),
      refetchQueries: [{ query: GET_PIZZAS }],
    })
  return (
    <div className="d-flex mt-5 ms-auto">
        <button className="btn btn-danger m-2" onClick={deletePizza}>
            <FaTrash className="icon" /> Delete Pizza
        </button>
    </div>
  )
}
