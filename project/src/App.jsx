import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '.components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
       <div className="flex justify-between items-center bg-gray-900 p-4">
        <div className='margin-left-30'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <div>
          <ul className='flex gap-15 text-white   w-full justify-center'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
       </div>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <div className="flex justify-evenly bg-gray-800 p-4 gap-10 flex-wrap" >
        <Card username={myObj.username = 'Akash'} btnText="click me" />
        <Card username={myObj.username = 'Anuj'} />
        <Card username={myObj.username = 'Aayush'} />
        <Card username={myObj.username = 'Anuj'} />
        <Card username={myObj.username = 'Aayush'} />
        <Card username={myObj.username = 'Anuj'} />
      </div>
    </>
  )
}

export default App