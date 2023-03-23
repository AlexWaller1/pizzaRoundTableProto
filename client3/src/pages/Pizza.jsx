import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BusinessPartnerInfo from "../components/BusinessPartnerInfo";
import { useQuery } from "@apollo/client";
import { GET_PIZZA } from "../queries/pizzaQueries";
import EditPizzaForm from "../components/EditPizzaForm";
import  DeletePizzaBtn from "../components/DeletePizzaBtn";

export default function Pizza() {
  const { id } = useParams();
  // getting id from the url
  const { loading, error, data } = useQuery(GET_PIZZA, {
    variables: { id }
  });
  // query to get single pizza

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
            <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
                Back
            </Link>
            <h1>{ data.pizza.name }</h1>
            <p>{ data.pizza.description }</p>

            <h5 className="mt-3">Project Status</h5>
            <p className="lead">{data.pizza.status}</p>

            <BusinessPartnerInfo businessPartner={data.pizza.businessPartner} />

            <EditPizzaForm pizza={data.pizza} />

            <DeletePizzaBtn pizzaId={data.pizza.id} />
        </div>
      )}
    </>
  )
}
