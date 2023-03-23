import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_BUSINESS_PARTNER } from "../mutations/businessPartnerMutations";
import { GET_BUSINESS_PARTNERS } from "../queries/businessPartnerQueries";

export default function AddBusinessPartnerModal() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    // defining state properties and the functions that can make state changes

    const [addBusinessPartner] = useMutation(ADD_BUSINESS_PARTNER, {
        // defining addBusinessPartner as the function that will call the 
        // useMutation function, the first argument of the useMutation() function is,
        // GraphQL mutation that we are using
        variables: { name, email, phone },
        update(cache, { data: { addBusinessPartner } }) {
            const { businessPartners } = cache.readQuery({ query: GET_BUSINESS_PARTNERS});
            cache.writeQuery({
                query: GET_BUSINESS_PARTNERS,
                data: { businessPartners: [...businessPartners, addBusinessPartner]}
            });
        }
    }
    // the second argument is an object whose first property is variables, and variables'
    // value is a destructured object with the properties needed to make the mutation
    // the other property is the update() function, we don't need to go over every line 
    // right now, but what update is basically doing is updating the DOM with the new 
    // Business Partner that is posted without having to refresh the page
    );

    const onSubmit = (e) => {
        e.preventDefault();
        if(name === "" || email === "" || phone === "") {
            return alert("Please Fill in all fields");
        }

        addBusinessPartner(name, email, phone);
        
        setName("");
        setEmail("");
        setPhone("");
    }
    // onSubmit() is used when the form is submitted, we prevent the default rerender when
    // the form is submitted, then return an alert if any of the madatory text fields
    // is empty
    // then we call the addBusinessPartner function to make our mutation and update the 
    // cache, and we also have to make sure the proper state values are passed down
    // as arguments so they can then be passed down as the variables property to make
    // the mutation

    return (
        <>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addBusinessPartnerModal">
            <div className="d-flex align-items-center">
                <FaUser className="icon"/>
                <div>Add Business Partner</div>
            </div>
          </button>


            <div className="modal fade" id="addBusinessPartnerModal" aria-labelledby="addBusinessPartnerModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="addBusinessPartnerModalLabel">Add Business Partner</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}