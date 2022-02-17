import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAOSMvc_B4GzCSBBF7QDt2UVGF_2AagXXw",
    authDomain: "login-auth-dfb9e.firebaseapp.com",
    projectId: "login-auth-dfb9e",
    storageBucket: "login-auth-dfb9e.appspot.com",
    messagingSenderId: "694639642606",
    appId: "1:694639642606:web:3bcc96d168ac3d3f51b0ff"

})


export const auth = app.auth()
export default app