// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
function App() {
  const [data,setData]=useState([])
  const submit=todo=>{
    const news={
      id:data.length+1,
      names:todo
    }
    setData([news,...data])
  }
  const onDelete=(index)=>{
    const n=data.filter((each)=>each!=index)
    console.log(n);
    setData(n)
  }
  return (
    <div className='container'>
      <TodoForm submit={submit}/>
      <Todo data={data} onDelete={onDelete}/>
    </div>
  )
}

export default App
