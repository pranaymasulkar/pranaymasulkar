import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App.jsx'
import MyDataContex from './context/MyDataContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MyDataContex>
        <App />
        <ToastContainer position="top-end" />
      </MyDataContex>
    </BrowserRouter>
  </StrictMode>,
)
