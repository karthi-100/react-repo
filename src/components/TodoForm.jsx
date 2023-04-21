// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import './TodoForm.css'
function TodoForm(props) {
    const [input,setIntput]=useState("");
    const {submit}=props
    
    const setChangeInput=e=>{
        setIntput(e.target.value)
        
    }
    const handleSubmit=e=>{
        e.preventDefault();
        if(input !=" ")
            submit(input)
        setIntput(" ");
    }
   
    return (
        
            <form onSubmit={handleSubmit}>
                <div className="text">
                <input type="text" name="input" id="input" value={input} onChange={setChangeInput} />
                </div>
                <div className="btn">
                    <button >Add</button>
                </div>
            </form>
        
    )
}

export default TodoForm