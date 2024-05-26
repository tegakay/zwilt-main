import React from 'react'
import Hero from '../components/Hero/Hero'
import InfoSection from '../components/InfoSection/InfoSection'
import Testimony from '../components/Testimony/Testimony'
import LearningSteps from '../components/LearningSteps/LearningSteps'
import StartView from '../components/StartView/StartView'
import Faq from '../components/Faq/Faq'
import Seperator from '../components/Seperator'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Seperator/>
      <InfoSection/>
      <Testimony/>
      <LearningSteps/>
      <StartView/>
      <Faq/>
    </div>
  )
}

export default Home