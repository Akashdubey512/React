import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo,updateTodo } from "../features/todo/todoSlice";
function Todo(){
const handleCheckBox = (id) => {
   dispatch(toggleTodoCompletion(id));

}
const [editingId, setEditingId] = useState(null);
const [editedText, setEditedText] = useState("");
const todos = useSelector(state =>state.todos)
const dispatch =useDispatch()
const handleEditClick = (todo) => {
  setEditingId(todo.id);
  setEditedText(todo.text);
};
const handleSaveClick = (id) => {
  if (editedText.trim() === "") return;
  dispatch(updateTodo({ id, text: editedText.trim() }));
  setEditingId(null);
  setEditedText("");
};
const handleCancelClick = () => {
  setEditingId(null);
  setEditedText("");
};

    return(
       <>
       <div className="flex flex-col space-y-4 ">
         <div className="text-amber-500 text-4xl font-bold mb-4 text-center">
        Todos
       </div>

        <div className="flex flex-col items-center justify-center space-y-4 min-h-[200px]">
           {todos.map((todo)=>(
          <div key={todo.id} className="flex items-center justify-between bg-gray-800 p-4 rounded">
         
      <input
        type="text"
        value={editingId === todo.id ? editedText : todo.text}
        onChange={(e) => setEditedText(e.target.value)}
        className={`flex-grow mr-2 bg-transparent border-none cursor-default min-w-200 ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
      />
      <input type="checkbox" id={`checkbox-${todo.id}`} checked={todo.completed} onChange={() => handleCheckBox(todo.id)} />
    {editingId === todo.id ? (
  <>
    <button 
        className="bg-blue-800 hover:bg-blue-700 transition duration-200
             hover:shadow-lg hover:scale-105
              text-white font-bold py-1 px-2 rounded ml-4"
    onClick={() => handleSaveClick(todo.id)}>Save</button>
    <button 
    className="bg-blue-800 hover:bg-blue-700 transition duration-200
             hover:shadow-lg hover:scale-105
              text-white font-bold py-1 px-2 rounded ml-4"
    onClick={handleCancelClick}>Cancel</button>
  </>
) : (
  <button onClick={() => handleEditClick(todo)}
    className="bg-blue-800 hover:bg-blue-700 transition duration-200
             hover:shadow-lg hover:scale-105
              text-white font-bold py-1 px-2 rounded ml-4"
  >Edit</button>
)}

             <button 
             className="bg-blue-800 hover:bg-blue-700 transition duration-200
             hover:shadow-lg hover:scale-105
              text-white font-bold py-1 px-2 rounded ml-4"
             onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </div>
       ))}
        </div>
       </div>
       </>
    )

}
export default Todo;