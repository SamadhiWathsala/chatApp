import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import LoginComponent from './login/login';
import DashboardComponent from './dashboard/dashboard';
import SignUpComponent from './signup/signUp';


const firebase = require ('firebase')
require ('firebase/firestore')


firebase.initializeApp({
  apiKey: "AIzaSyAisDiP2lr8j5CiIePs_qKJtrLzmjgUbDI",
    authDomain: "chat-4bb7d.firebaseapp.com",
    databaseURL: "https://chat-4bb7d.firebaseio.com",
    projectId: "chat-4bb7d",
    storageBucket: "chat-4bb7d.appspot.com",
    messagingSenderId: "634251149628",
    appId: "1:634251149628:web:83c737433b321dc2ff1e39",
    measurementId: "G-K2WYD47M3G"
})


const routing = (

  <Router>
    <div id ='routing-container'>
      <Route path='/login' component = {LoginComponent}></Route>
      <Route path='/signUp' component = {SignUpComponent}></Route>
      <Route path='/dashboard' component = {DashboardComponent}></Route>
    </div>
  </Router>

)



ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
