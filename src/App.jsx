import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar /><br /><br />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
     
    </>
  )
}

export default App
