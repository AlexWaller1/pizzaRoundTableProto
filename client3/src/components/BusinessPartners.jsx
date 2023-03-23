import { useQuery } from "@apollo/client";
import BusinessPartnerRow from './BusinessPartnerRow';
import { GET_BUSINESS_PARTNERS } from "../queries/businessPartnerQueries";
import Spinner from "./Spinner";

// Won't need this component
// 
export default function BusinessPartners() {
    const { loading, error, data } = useQuery(GET_BUSINESS_PARTNERS);

    if (loading) return <Spinner />;
    if (error) return <p>{"Dropped the Pizza :("}</p>
    return <>{ !loading && !error && (
        <table className="table table-hover mt-3">
            {/* remember to look up bootstrap table classes */}
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { console.log(data) }
                {data.businessPartners.map(bp => (
                  <BusinessPartnerRow key={bp.id} businessPartner={bp}/>
                ))}
            </tbody>
        </table>
    )}</>
}