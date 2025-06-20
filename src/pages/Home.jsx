import React from 'react'
import HeroSection from '../sections/Hero'
import AboutCompany from '../sections/AboutCompany'
import CreativeSolutions from '../sections/CreativeSolutions'
import ProjectPortfolio from '../sections/ProjectPortfolio'
import ProjectProcess from '../sections/ProjectProcess'
import ProjectDetails from '../sections/ProjectsDetails'
import TeamSection from '../sections/TeamSection'
import CollaboratorsSection from '../sections/CollaboratorsSection'
import ClientFeedback from '../sections/ClientFeedback'
import WorkShowcase from '../sections/WorkShowcase'
import SignupSection from '../sections/SignupSection'

function Home() {
  return (
    <>
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
    </>
  )
}

export default Home