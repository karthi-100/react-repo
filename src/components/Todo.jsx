// eslint-disable-next-line no-unused-vars
import React from 'react'
import TodoList from './TodoList'
import './Todo.css'
const Todo = (props) => {
  const {onDelete,data}=props
const changeDelete=(toDelete)=>onDelete(toDelete)
  return (
    <div className='todo'>Todo
     <div className="insert"> {data.map((each)=><TodoList key={each+1} each={each} changeDelete={changeDelete}/>)
      }
      </div>
    </div>
  )
}

export default Todo