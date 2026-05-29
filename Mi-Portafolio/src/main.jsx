import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // o BrowserRouter, el que uses
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' // Tus estilos de Bootstrap

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)