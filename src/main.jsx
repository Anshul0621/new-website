import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import Context from './assets/Context.jsx'

createRoot(document.getElementById('root')).render(
  <Context >
  <HashRouter>
    <App />
  </HashRouter>
  </Context>
)
