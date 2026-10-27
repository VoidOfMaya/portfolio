import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header'
import { Intro } from './components/aboutme/about'
import { Background } from './components/helpers/background'

function App() {
  return (
    <>
    <div className='mainContainer'> 
      <Header />
      <main className='content'>
          <Intro />             
      </main>
      <div style={{zIndex: '-1'}}>
        <Background />            
      </div>
    </div>
    </>

    
  )
}

export default App
