import React from 'react'
import "./faq.css";
import Accordion from './Accordion';
import FaqQuestions from './FaqQuestions';
import FaqBanner from './FaqBanner';

const Faq = () => {
  return (
    <div className='container main-faq' >
        <div className="faq-main-ui">
        <div className="faq-ui">
            <div className="faqinfo">
                <h2>Why Choose Zwilt</h2>
                <p>We take complex hiring proceses- and simplify them. Connecting you to the worlds highly qualified talent pool</p>
            </div>
            <Accordion/>
            
        </div>
        </div>
        <FaqQuestions/>
        
    </div>
  )
}

export default Faq