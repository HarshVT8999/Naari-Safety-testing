import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Signup() {
  const nameRef = useRef()
  const phoneRef = useRef()
  const cityRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !==
      passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
      history.push("/home")
    } catch {
      setError('Failed to Create an account')
    }
    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="phone" ref={phoneRef} required />
            </Form.Group>
            <Form.Group id="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="city" ref={cityRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit" style={{ margin: "20px 0 0 0" }}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="sign-in">
        Already have an account? <Link to="/login">Sign In</Link>
      </div>
    </>
  )
}
