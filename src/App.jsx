import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Links from './components/Links'

function App() {
 
  return (
    <HashRouter>
      <Navbar/>
      <Links/>
      <Footer/>
    </HashRouter>
  )
}

export default App
