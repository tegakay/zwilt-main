import React from 'react'
import zwiltarrowdown from '../../assets/faq/zwilt-arrow-down.png'
import './faq.css'

const FaqBanner = () => {
  return (
    <div className="faqbannermain">
      <div className='faq-banner'>
      <h2>Need a job done and done well? Get started</h2>
    <div className='start-ff'><span className='explore'><img src={zwiltarrowdown}/></span></div>
    </div>
    </div>
  )
}

export default FaqBanner