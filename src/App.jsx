import React from 'react'
import Navbar from "./components/Navber"
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Test from './components/Test'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}
