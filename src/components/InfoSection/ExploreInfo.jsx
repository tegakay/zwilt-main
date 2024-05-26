import React from 'react'
import InfoSectionCard from './InfoSectionCard'
import zwiltlogosm from '../../assets/zwilt-logo-wh.png'

const ExploreInfo = () => {
  return (
    <div className='explore-info'>
        <InfoSectionCard/>
        <InfoSectionCard/>
        <div className='explore-more-info'>
        <p><span className='explore'><img src={zwiltlogosm}/></span>Explore More</p>
        </div>
    </div>
  )
}

export default ExploreInfo