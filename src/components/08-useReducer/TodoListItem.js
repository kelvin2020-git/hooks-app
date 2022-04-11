import React from 'react'

export const TodoListItem = ({todo, index, handledelete, handleToggle}) => {
  return (
    <li key={todo.id}
            className="list-group-item"
            >
                <p
            className={`${todo.done && 'complete'} `}
                 onClick={ ()=>handleToggle(todo.id)}
                 >{index + 1}. {todo.desc}
                 </p>
                 <button className='btn btn-danger' onClick={()=>handledelete(todo.id)}> Borrar </button>
            </li>
  )
}
