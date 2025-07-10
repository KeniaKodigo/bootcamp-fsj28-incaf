import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Characters from './components/Characters'

function App() {
  //estado para los personajes favoritos
  const [favorites, setFavorites] = useState([])

  return (
    <>
      <h1>API DRAGON BALL</h1>
      <Characters favorites={favorites} setFavorites={setFavorites} />
    </>
  )
}

export default App
