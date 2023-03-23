import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_BUSINESS_PARTNER } from '../mutations/businessPartnerMutations';
import { GET_BUSINESS_PARTNERS } from '../queries/businessPartnerQueries';
import { GET_PIZZAS } from '../queries/pizzaQueries';
// won't need this component either but this is what is displaying
// business partner information on the home page, the businessPartner prop
// that is passed down has a value of an element of the businessPartner
// array that is on the data object that is being retrieved from the GraphQL query
export default function BusinessPartnerRow({ businessPartner }) {
    const [deleteBusinessPartner] = useMutation(DELETE_BUSINESS_PARTNER, {
        // here we are using a delete mutation, which means that an id variable
        // needs to be passed through
        variables: { id: businessPartner.id },
        refetchQueries: [{ query: GET_BUSINESS_PARTNERS }, { query: GET_PIZZAS }],
        // update(cache, { data: { deleteBusinessPartner } }) {
        //     const { businessPartners } = cache.readQuery({
        //         query: GET_BUSINESS_PARTNERS
        //     });
        //     cache.writeQuery({
        //         query: GET_BUSINESS_PARTNERS,
        //         data: { businessPartners: businessPartners.filter(bp => bp.id !== deleteBusinessPartner.id) }
        //     })
        // }
    });
    return (
        <tr>
            <td>{ businessPartner.name }</td>
            <td>{ businessPartner.email }</td>
            <td>{ businessPartner.phone }</td>
            <td>
                <button className="btn btn danger btn-sm" onClick={deleteBusinessPartner}><FaTrash/></button>
            </td>
        </tr>
    )
}