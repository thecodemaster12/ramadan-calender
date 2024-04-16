import { useState } from 'react'
import './App.css'
import RamadanCalender from './components/RamadanCalender'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Eidmubarak from './components/Eidmubarak'

function App() {

  return (
    <>
    <main className='max-w-[1200px] m-auto'>
      <Hero />
      {/* <RamadanCalender className='' /> */}
      <Eidmubarak />
      <Footer />
    </main>
    </>
  )
}

export default App
