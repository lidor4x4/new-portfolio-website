import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/fontAwesomeIcons";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
