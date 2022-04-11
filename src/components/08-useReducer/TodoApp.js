import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import'./styles.css';
//import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// const initialState =[{
//     id: new Date().getTime(),
//     desc:'Aprende React',
//     done: false
// }]

 const init =()=>{

return JSON.parse(localStorage.getItem('todos')) || [];

 }


export const TodoApp = () => {
  
  
//   const [todos, dispatch] = useReducer(todoReducer, initialState);
const [todos, dispatch] = useReducer(todoReducer, [], init); 

  useEffect( ()=>{
      localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);


  const handledelete = (todoId) =>{
      console.log(todoId);
    
       const action ={
           type:'delete',
           payload: todoId
       };
     dispatch(action);

  }

  const handleToggle =(todoId)=>{

    dispatch({
        type:'toggle',
        payload:todoId
    });
  }

  const handleAddtodo=(newTodo) =>{
  
 dispatch({
    type:'add',
    payload: newTodo
});
 
  };
  
    return (
    <div>
        <h1>Todo App ({todos.length})</h1>
        <hr/>
<div className='row'>
 
    <div className='col-7'>
   
    < TodoList
     todos={todos}
     handleToggle={handleToggle}
     handledelete={handledelete}
  />
    </div>
    <div className='col-5'>
     <TodoAdd
     handleAddtodo={handleAddtodo}/>
    


    </div>
    </div>
 </div>
  )
}
