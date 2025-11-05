import { use, useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.error('Error fetching users:', error)
      })  
  }, [])

  return (
    <>
    
      <h1>users</h1>
      <p> users:{users.length}</p>
      {
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
          </div>
        ))
      }
    </>
  )
}

export default App
