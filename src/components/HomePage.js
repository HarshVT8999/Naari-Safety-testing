import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import sound from './Audio/Siren.mp3'
export default function HomePage() {
  const clog = () => {
<<<<<<< HEAD
    console.log("Clicked")
=======
    console.log("Clicked");
>>>>>>> 7570717454ff64cf1f49e8c1763a95286e80c7f0
    console.log(useAuth)
  }
  const [error, setError] = useState()
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  function siren() {
    const alert = new Audio(sound);
    alert.play();
  }

  async function handleLogout() {
    setError('')
    try {
      await logout()
      history.push("/login")
    } catch {
      setError('Failed to Logout')
    }

  }
  return (
    <div>
      <Navbar />
      <div className='hpage'>
        <div className='btn1'>
          <button className='alt' onClick={siren}>Alert</button>
        </div>
        <div className='btn2'>
          <button className='emer' onClick={clog}>Emergency</button>
        </div>
        <div className='btn3'>
          <button className='lctn' onClick={clog}>Location</button>
        </div>
        <div>
          <button className='lout' onClick={handleLogout}>LogOut</button>
        </div>
      </div>
    </div>
  )
}
