import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_BUSINESS_PARTNER } from "../mutations/businessPartnerMutations";
import { GET_BUSINESS_PARTNERS } from "../queries/businessPartnerQueries";

export default function AddBusinessPartnerModal() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [addBusinessPartner] = useMutation(ADD_BUSINESS_PARTNER, {
        variables: { name, email, phone },
        update(cache, { data: { addBusinessPartner } }) {
            const { businessPartners } = cache.readQuery({ query: GET_BUSINESS_PARTNERS});
            cache.writeQuery({
                query: GET_BUSINESS_PARTNERS,
                data: { businessPartners: [...businessPartners, addBusinessPartner]}
            });
        }
    });

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