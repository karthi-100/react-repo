// eslint-disable-next-line no-unused-vars
import React from 'react'
import './TodoList.css'
const TodoList = (prop) => {
 const {each,changeDelete}=prop
const {id,names}=each
const onDelete=()=>changeDelete(each);

  return (
    <div className='contain'>
        <p>{id} <span>{names}</span></p>
        <button onClick={onDelete}>delete</button>
    </div>
  )
}

export default TodoList