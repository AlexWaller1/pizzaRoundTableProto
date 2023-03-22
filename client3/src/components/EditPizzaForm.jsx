import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_PIZZA } from '../queries/pizzaQueries';
import { UPDATE_PIZZA } from '../mutations/pizzaMutations';

export default function EditPizzaForm({ pizza }) {

  const [name, setName] = useState(pizza.name);
  const [description, setDescription] = useState(pizza.description);
  const [status, setStatus] = useState("");

  const [updatePizza] = useMutation(UPDATE_PIZZA, {
    variables: { id: pizza.id, name, description, status },
    refetchQueries: [{ query: GET_PIZZA, variables: { id: pizza.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if ( !name || !description || !status ) {
      return alert("Please fill out all fields");
    }

    updatePizza(name, description, status);
  };

  return (
    <div className="mt-5">
        <h3>Update Pizza Details</h3>
        <form onSubmit={ onSubmit }>
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
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
