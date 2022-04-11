import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddtodo}) => {
    const [{description},handleInputChange, reset] = useForm({
        description:""
    });
    const handleSubmit =(e) =>{
        e.preventDefault();
     
        if(description.trim().length <= 1){
            return;
              
        }
        
        const newTodo ={
         id: new Date().getTime(),
         desc:description,
         done: false
        };
     
      
        handleAddtodo(newTodo);
      reset();
       };
  
    return (
    <>
       <h4>Agregar TODO</h4>
        <hr/>
        <form onSubmit={handleSubmit}>
        <input
         type="text"
         name="description"
         className="form-control"
         placeholder="aprender..."
         autoComplete="off"
         value={description}
         onChange={handleInputChange}
        />
        
        
        <button 
        type='submit'
        className="btn btn-outline-primary mt-1 btn-block"> Agregar </button>
        </form>
    </>
  )
}
