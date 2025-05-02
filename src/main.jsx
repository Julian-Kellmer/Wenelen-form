import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
    <>
      <Header />
      <App />
    </>
  
)
