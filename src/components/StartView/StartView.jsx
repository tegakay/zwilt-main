import React from 'react'
import zwiltlogosm from '../../assets/zwilt-logo-wh.png'
import firstview from '../../assets/startview/startview-1.png'
import secondview from '../../assets/startview/startview-2.png'
import thirdview from '../../assets/startview/startview-3.png'
import './StartView.css'

const StartView = () => {
  return (
    <div className='container startview-main'>
        <h1>Start your journey today</h1>
        
        <div className="startlistsprimary start-first">
        <div className="startlists ">
            <div className='startlistno sm-hidden'>
                <p>1</p>

            </div>

            <div className="startcontent">
                <p className='startcontent-title'><span className='lg-hidden'>1.</span> Find your next star performer</p>
                <p>Explore the vast Zwilt marketplace to find the candidate that meets ur nees </p>
                <div className='start-ff'><p><span className='explore'><img src={zwiltlogosm}/></span>Join Now</p></div>
            </div>

            <div className='sm-hidden '><img src={firstview} className='startview-img'/></div>
        </div>
        </div>

        <div className="startlistsprimary start-second">
        <div className="startlists ">
            <div className='startlistno sm-hidden'>
                <p>2</p>

            </div>

            <div className="startcontent">
                <p className='startcontent-title'><span className='lg-hidden'>2.</span> Evaluate to our Hearts Content</p>
                <p>Asess the candidate through work history,transparent tests and video interviews</p>
                <div className='start-ff'><p><span className='explore'><img src={zwiltlogosm}/></span>Join Now</p></div>
            </div>

            <div className='sm-hidden '><img src={secondview} className='startview-img'/></div>
        </div>
        </div>
        <div className="startlistsprimary start-third">
        
        <div className="startlists ">
            <div className='startlistno sm-hidden'>
                <p>3</p>

            </div>

            <div className="startcontent ">
                <p className='startcontent-title'><span className='lg-hidden'>3.</span> Start building your team</p>
                <p>Onboard your candidate right away and start creating the next big thing</p>
                <div className='start-ff'><p><span className='explore'><img src={zwiltlogosm}/></span>Join Now</p></div>
            </div>

            <div className='sm-hidden '><img src={thirdview} className='startview-img'/></div>
        </div>
        </div>

    </div>
  )
}

export default StartView