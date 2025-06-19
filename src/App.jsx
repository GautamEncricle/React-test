import React from 'react'
// import Home from './pages/Home'
import Navbar from './components/Navbar'
import ButtonWithIcon from './components/ButtonWithIcon'
import './assets/css/font.css'
import HeroSection from './sections/Hero'
import AboutCompany from './sections/AboutCompany'
import Container from './components/ServiceItem'
import CreativeSolutions from './sections/CreativeSolutions'
import ProjectPortfolio from './sections/ProjectPortfolio'
import ProjectProcess from './sections/ProjectProcess'
import ProjectDetails from './sections/ProjectsDetails'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutCompany />
      <CreativeSolutions />
      <ProjectPortfolio />
      <ProjectProcess />
      <ProjectDetails />
    </>
  )
}

export default App
