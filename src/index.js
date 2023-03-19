import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA856eGk1EDvtYehdGFnUrQKor1bVmNF6Y",
  authDomain: "compratech-3a248.firebaseapp.com",
  projectId: "compratech-3a248",
  storageBucket: "compratech-3a248.appspot.com",
  messagingSenderId: "840008526202",
  appId: "1:840008526202:web:42c46035f7cbc29ada8ec3"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

