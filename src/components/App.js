import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import Forgetpass from "./Forgetpass"
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import Account from './Account'
import Settings from './Settings'
import Contact from './Contact'


function App() {

    return (
        <div className="App">
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
        </div>
    )
}
export default App;