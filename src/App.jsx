import './App.css'
import React from 'react'
import Dashboard from './pages/dashboard'
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {

  return (
    <div>
      <Dashboard />
      <SpeedInsights />
    </div>
  )
}

export default App
