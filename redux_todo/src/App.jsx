import { useState } from 'react'
import './index.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
function App() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-700 text-white space-y-4'>
    <Todo/>
    <AddTodo/>
    </div>
  )
}

export default App
