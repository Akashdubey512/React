import React from "react";
import { useDispatch }  from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react"; 
function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
return(
    <div >
        <div className="bg-gray-800 p-4 rounded-2xl shadow-md w-96 text-white">
        <form  onSubmit={addTodoHandler} className="w-full flex flex-col gap-4">
        <input type="text" placeholder="Add todo" className="bg-gray-700 p-2  "
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-blue-800 hover:bg-blue-700
        hover:shadow-lg hover:scale-105 text-white font-bold py-2 px-4 rounded">Add Todo</button>
        </form>
    </div>
    
    </div>
)
}

export default AddTodo;