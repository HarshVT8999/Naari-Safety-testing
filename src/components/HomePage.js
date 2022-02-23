import React, { useState } from "react"
import { Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext'
import '../App.css'


export default function HomePage() {
  const [error, setError] = useState()
  const {currentUser, logout} = useAuth()
  const navigate = useNavigate()
   

  async function handleLogout(){
    setError('')

    try{
      await logout()
      navigate("/login")
    }catch{
      setError('Failed to Logout')
    }

  }
  
  return (
    <>
    <Card>
    <Card.Body>
          <h2 className="text-center mb-4">Account</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Profile ID:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
        <Button variant="link "onClick={handleLogout}>Log Out</Button>
      </div>
    </>
  )
}
