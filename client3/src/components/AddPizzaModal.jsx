import { useState } from "react";
import { FaList } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PIZZAS } from "../queries/pizzaQueries";
import { ADD_PIZZA } from "../mutations/pizzaMutations";
import { GET_BUSINESS_PARTNERS } from "../queries/businessPartnerQueries";

export default function AddPizzaModal() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [businessPartnerId, setBusinessPartnerId] = useState("");
    const [status, setStatus] = useState("available");

    const [addPizza] = useMutation(ADD_PIZZA, {
        variables: { name, description, businessPartnerId, status},
        update(cache, { data: { addPizza } }) {
            const { pizzas } = cache.readQuery({ query: GET_PIZZAS });
            cache.writeQuery({
              query: GET_PIZZAS,
              data: { pizzas: [...pizzas, addPizza] }
            });
        }
    });

    // Get Business Partners for Select
    const { loading, error, data } = useQuery(GET_BUSINESS_PARTNERS);
    // useQuery() is another function from Apollo, here we are getting data from
    // the GET_BUSINESS_PARTNERS query, loading will tell us if the page is loading
    // error will tell us if the query errored, and data is an object that we are retrieving
    // the queried data from


    const onSubmit = (e) => {
        e.preventDefault();
        if(name === "" || description === "" || status === "") {
            return alert("Please Fill in all fields");
        }
        console.log("onSubmit")
        addPizza(name, description, status, businessPartnerId);
        // todo: don't need businessPartnerId
        
        setName("");
        setDescription("");
        setStatus("available");
        setBusinessPartnerId("");
        // same deal as the onSubmit for the AddBusinessPartner modal
        // return an alert if name, description, or status are missing
        // then then call the addPizza() function using the properties
        // of the pizza object as the arguments
    }

    if (loading) return null;
    if (error) return "Something Went Wrong";

    return (
        <>
         { !loading && !error && (
            <>
             <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addPizzaModal">
            <div className="d-flex align-items-center">
                <FaList className="icon"/>
                <div>New Pizza</div>
            </div>
          </button>


            <div className="modal fade" id="addPizzaModal" aria-labelledby="addPizzaLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="addPizzaModalLabel">New Pizza</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select 
                              id="status" 
                              className="form-select" 
                              value={status} 
                              onChange={(e) => setStatus(e.target.value)}
                            >
                              <option value="available">available</option>
                              <option value="notAvailable">not available</option>
                            </select>
                            {/* this is how the enum is set up */}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Business Partner</label>
                            <select className="form-select" value={businessPartnerId} onChange={(e) => setBusinessPartnerId(e.target.value)}>
                                <option>Select Business Partner</option>
                                { data.businessPartners.map((bp) => (
                                    <option key={bp.id} value={bp.id}>{ bp.name }</option>
                                    // mapping through businessPartners where each will option
                                    // on the Business Partner dropdown menu
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
            </>
         )}
         
        </>
    )
}