import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [isLogedIn,setIsLoggedIn] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
<<<<<<< HEAD

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
=======
  
  function login(email,password){
    return auth.signInWithEmailAndPassword(email,password);
    setIsLoggedIn(true);
>>>>>>> 7570717454ff64cf1f49e8c1763a95286e80c7f0
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    isLogedIn,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
<<<<<<< HEAD
      {console.log(currentUser)}
=======
      {console.log(isLogedIn)}
>>>>>>> 7570717454ff64cf1f49e8c1763a95286e80c7f0
    </AuthContext.Provider>
  )
}
