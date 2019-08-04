import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyD1iDM6YXkZcFv6mb_YdF8e2xIQ3qY51wc",
    authDomain: "firstapp-3471d.firebaseapp.com",
    databaseURL: "https://firstapp-3471d.firebaseio.com",
    projectId: "firstapp-3471d",
    storageBucket: "firstapp-3471d.appspot.com",
    messagingSenderId: "54042311347",
    appId: "1:54042311347:web:15a3dd63c0dbe31e"
})
ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
