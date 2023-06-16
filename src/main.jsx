import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyATnvvUvS3TAnJiNxHHMOxWCIXkQ7OR5dI",
	authDomain: "sportify-e751a.firebaseapp.com",
	projectId: "sportify-e751a",
	storageBucket: "sportify-e751a.appspot.com",
	messagingSenderId: "665140055992",
	appId: "1:665140055992:web:635338141db627730f494d",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
