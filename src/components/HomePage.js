import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import sound from './Audio/Siren.mp3'
export default function HomePage() {
  const clog = () => {
    console.log("Clicked")
  }
  const [error, setError] = useState()
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  function siren() {
    const alert = new Audio(sound);
    alert.play();
  }

  async function handleLogout() {
    setError('')
    try {
      await logout()
      navigate("/login")
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
