import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header'
import { Intro } from './components/intro/home'
import {ParticalSys } from './components/particals/particals'
import { About } from './components/aboutme/aboutme'
import { Partical } from './components/particals/staticAnchor'
import { ProjectPage } from './components/projects/projectPage'
import { ContactPage } from './components/contactme/contactMe'


function App() {
  const pages = [Intro]
  return (
      <main className='mainContainer'>        
        <section className='content'>
            <Intro />   
            <ProjectPage />
            <About />
            <ContactPage />   
        </section>
        <Header /> 
  
        <ParticalSys.ParBackground />
      </main>       
  )
}

export default App
