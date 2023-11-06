import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { JournalContextProvider } from './Components/JournalContext'
import { ChecklistContextProvider } from './Components/ChecklistContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JournalContextProvider>
      <ChecklistContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
      </ChecklistContextProvider>
    </JournalContextProvider>
  </React.StrictMode>,
)
