import React from 'react'
import './index.css'
import Weather from './components/Weather'
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  return (
    <div className='app'>
      <Analytics/>
      <Weather/>
    </div>
  )
}

export default App
