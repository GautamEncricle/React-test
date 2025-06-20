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
import TeamSection from './sections/TeamSection'
import CollaboratorsSection from './sections/CollaboratorsSection'
import ClientFeedback from './sections/ClientFeedback'
import WorkShowcase from './sections/WorkShowcase'
import SignupSection from './sections/SignupSection'
import Footer from './components/Footer'

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
      <TeamSection />
      <CollaboratorsSection />
      <ClientFeedback />
      <WorkShowcase />
      <SignupSection />
      <Footer/>
    </>
  )
}

export default App
