import React from 'react'
import firstaccordionimg from '../../assets/faq/accordion-1.png'
import zwiltlogosm from '../../assets/zwilt-logo-wh.png'
import secondaccordionimg from '../../assets/accordion-second.png'
import thirdaccordionimg from '../../assets/accordion-third.png'


const Accordion = () => {
  return (
    <div className='acordion-list'>
        <div className="faqaccordion">
            <div className="accordion-title">
                <h2 className='accordion-header'>Onboard Without the Risk</h2>

                <ul className='accordion-list'>
                    <li>We Pick the best for you to select</li>
                    <li>Thousands of vetted candidates in dozens of categories</li>
                    <li>Risk free Resource swapping for the best fit</li>
                </ul>
                <div className='start-ff'><p><span className='explore'><img src={zwiltlogosm}/></span>Learn More</p></div>
            </div>

           <div className="accordionimg">
            <img src={firstaccordionimg} className='acc-img'/>
           </div>

        </div>

        <div className="faqaccordion">
            <div className="accordion-title">
                <h2 className='accordion-header'>An open book</h2>

                <ul className='accordion-list'>
                    <li>easy and transparent one-to-one chat with candidates</li>
                    <li>simple and convienent payment methods</li>
                    <li>Review past ratings</li>
                </ul>
                <div className='start-ff'><p><span className='explore'><img src={zwiltlogosm}/></span>Learn More</p></div>
            </div>

           <div className="accordionimg">
            <img src={secondaccordionimg} className='acc-img'/>
           </div>

        </div>


        <div className="faqaccordion">
            <div className="accordion-title">
                <h2 className='accordion-header'>Stay in the loop</h2>

                <ul className='accordion-list'>
                    <li>Track your staff activity down to every minute with screenshots</li>
                    <li>Comprehensive timesheet data to process payments</li>
                    <li>Create projects to organize and assign tasks more eficiently</li>
                </ul>
                <div className='start-ff'><p><span className='explore'><img src={zwiltlogosm}/></span>Learn More</p></div>
            </div>

           <div className="accordionimg">
            <img src={thirdaccordionimg} className='acc-img'/>
           </div>

        </div>
    </div>
  )
}

export default Accordion