import React from 'react'
import Landing from './Components/Landing'
import './App.css'
import Mission from './Components/Mission'
import Scanner from './Components/IdScanner'
import Tool from './Components/Tool'
import QrCode from './Components/QRCode'
import Benefits from './Components/Benefits'
import Logo from './Components/Logo'
import Form from './Components/Form'


function App() {
  return (
    <div>
        <Landing/>
        <Mission/>
        <Scanner/>
        <Tool />
        <QrCode/>
        <Benefits/>
        <Logo/>
       <Form/> 
    </div>
  )
}

export default App