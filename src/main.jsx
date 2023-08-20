import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CategoryProvider } from './contexts/CategoryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CategoryProvider>
  </React.StrictMode>,
)
