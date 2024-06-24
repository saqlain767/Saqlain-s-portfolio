import React from 'react'
import "./App.css"
import Header from './Component/header/Header';
import About from './Component/about/About';
import Home from './Component/home/Home';

const App = () => {
  return (
    <div>
      <Header />
      <main className='main'>
      <About />
      <Home />
      </main>
    </div>
  )
}

export default App
