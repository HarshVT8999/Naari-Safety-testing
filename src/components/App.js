import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./SignUp";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Dashboard from "./Dashboard"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"

function App(){
    return(
        <Container 
        className="d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh"}}
        >
        <div className="w-100" style={{maxWidth: "400px"}}>
          <Router>
            <AuthProvider>
               <Routes>
                    <Route exact path="/" element={<Dashboard/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
               </Routes>
            </AuthProvider>
            </Router>
        </div>
        </Container>
    )
}

export default App;