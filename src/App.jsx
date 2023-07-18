import { useState, useEffect } from 'react'
import Header from './Header'
import AddDestination from './AddDestination'
import './App.css'
import axios from 'axios'

function App() {
  const [destinations, setDestinations] = useState([])
  console.log(import.meta.env.VITE_APP_API_KEY)

  useEffect(() => {
    axios.get(`http://localhost:4545/api/destinations?apiKey=${import.meta.env.VITE_APP_API_KEY}`)
      .then(res => console.log(res.data))
      
  }, [])

  return (
    <>
      <Header/>
    </>
  )
}

export default App
