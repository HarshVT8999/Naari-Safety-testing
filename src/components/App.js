import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./SignUp";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
=======
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"
>>>>>>> 7570717454ff64cf1f49e8c1763a95286e80c7f0
import Dashboard from "./Dashboard"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import Forgetpass from "./Forgetpass"
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";

function App(){
    
    return(
        <div className="App">
<<<<<<< HEAD
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Router>
                        <AuthProvider>
                            <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route path="/signup" component={Signup} />
                                <Route path="/login" component={LoginPage} />

                                <PrivateRoute path="/home" component={HomePage} />
                                <Route exact path="/account" component={Account} />
                                <Route exact path="/settings" component={Settings} />
                                <Route exact path="/contact" component={Contact} />

                                <Route path="/forget-password" component={Forgetpass} />
                                <Route path="/update-profile" component={UpdateProfile} />
                            </Switch>
                        </AuthProvider>
                    </Router>
                </div>
            </Container>
=======
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
>>>>>>> 7570717454ff64cf1f49e8c1763a95286e80c7f0
        </div>
    )
}

export default App;