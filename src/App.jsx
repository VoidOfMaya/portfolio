import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header'
import { Intro } from './components/intro/home'
import {ParticalSys } from './components/particals/particals'
import { About } from './components/aboutme/aboutme'


function App() {
  const pages = [Intro]
  return (
      <div className='mainContainer'>        
        <main className='content'>
            <Intro />   
 
            <About />   
        </main>
        <Header /> 
        {/*<Background /> */}
        <ParticalSys.ParBackground />   
      </div>       
  )
}

export default App
