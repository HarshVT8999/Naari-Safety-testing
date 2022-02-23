import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./SignUp";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Dashboard from "./Dashboard"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import Forgetpass from "./Forgetpass"
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";

function App(){
    
    return(
        <div className="App">
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
                    <Route element={<PrivateRoute/>}>
                    <Route path="/home" element={<HomePage/>}/>
                    </Route>
                    <Route path="/forget-password" element={<Forgetpass/>}/>
                    <Route path="/update-profile" element={<UpdateProfile/>}/>
               </Routes>
            </AuthProvider>
            </Router>
        </div>
        </Container>
        </div>
    )
}

export default App;