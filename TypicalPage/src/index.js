import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import { createRoot } from "react-dom/client";
import AuthContextProvider from './context/auth-context';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)