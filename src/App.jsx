import { useState, useEffect } from 'react'
import Header from './Header'
import AddDestination from './AddDestination'
import DestinationCard from './DestinationCard'
import './App.css'
import axios from 'axios'

function App() {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4545/api/destinations?apiKey=${import.meta.env.VITE_APP_API_KEY}`)
      .then(res => setDestinations(res.data))
      
  }, [])

  console.log('hit App.jsx', destinations)

  return (
    <>
      <Header/>
      <main>
        {destinations.map(dest => {
          return <DestinationCard name={dest.name} imageURL={dest.imageURL} notes={dest.notes} international={dest.international}/>
        })}
      </main>
    </>
  )
}

export default App
