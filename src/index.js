import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBwgIQg5ELU4utQGDhSf1GDYfYqdEFUP3s",
  authDomain: "it-territory-test-432b0.firebaseapp.com",
  databaseURL: "https://it-territory-test-432b0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "it-territory-test-432b0",
  storageBucket: "it-territory-test-432b0.appspot.com",
  messagingSenderId: "991969507114",
  appId: "1:991969507114:web:6bdc7a8633ebb4c1b35053"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
