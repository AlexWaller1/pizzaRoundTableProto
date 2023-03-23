import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { DELETE_PIZZA } from "../mutations/pizzaMutations";
import { GET_PIZZAS } from "../queries/pizzaQueries";
import { useMutation } from "@apollo/client";

export default function DeletePizzaBtn({ pizzaId }) {
    const navigate = useNavigate();
    // function will help send user to home page when Pizza is deleted on its show page

    const [deletePizza] = useMutation(DELETE_PIZZA, {
      variables: { id: pizzaId },
      // id needed to pick correct Pizza to delete
      onCompleted: () => navigate("/"),
      // when mutation is made, user will be redirected to home page
      refetchQueries: [{ query: GET_PIZZAS }],
      // we'll call GET_PIZZAS so list of current pizzas will be updated
      // without users having to refresh page
    })
  return (
    <div className="d-flex mt-5 ms-auto">
        {/* d is display, mt is margin-top, ms is margin-left, me is margin-right */}
        <button className="btn btn-danger m-2" onClick={deletePizza}>
            <FaTrash className="icon" /> Delete Pizza
        </button>
    </div>
  )
}
