import './App.css'
import { Bill } from './components/bill/Bill'
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {

  return (
    <div>
      <Bill/>
      <SpeedInsights />
    </div>
    
  )
  
}

export default App
