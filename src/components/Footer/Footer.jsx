import React from 'react'
import logo from "../../assets/zwiltlogo.png";
import './footer.css'
import FaqBanner from '../Faq/FaqBanner';


const Footer = () => {
  return (
    <div className=' container footer'>
      <div className="footer-banner-holder">
      <FaqBanner/>
      </div>
      <div className="main-footer">
      <div className="footerinfo">
        <div><img src={logo} /></div>
        <div></div>
        <p> we take complex hiring processes - and simplify them.Connecting you to the worlds highly qualified talent pool.</p>

        <div>
        <h4>LINKS AND REDIRECTS</h4>
        <button className='footer-btn filler'>Hire now</button><button className='footer-btn filler'> Apply now</button>
        </div>
      </div>
      <div className="footerlinks">
        <h2>Connectng the right people to the right business</h2>
        <div className='footerlinks-list'>
          <div>
            <h4>PLATFORM</h4>
            <ul>
              <li>Find Work</li>
              <li>Find Talent</li>
              <li>Categories</li>
              <li>About us</li>
            </ul>
          </div>

          <div>
            <h4>CATEGORIES</h4>
            <ul>
              <li>Data Science</li>
              <li>IT & Networking</li>
              <li>Web and Mobile</li>
              
            </ul>

          </div>
          
          <div>
            <h4>HELP</h4>
            <ul>
              <li>FAQ</li>
              <li>Contact us</li>
              
            </ul>
          </div>

          <div>
            <h4>GET IN TOUCH</h4>
            <ul>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Twitter</li>
              
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div className="side-footer">
        <p className='nop'>All right reerved by Zwilt</p>
        <div> <ul className='side-footer-list'>
          <li className='underline'> Privacy policy</li>
          <li className='underline'> Terms and conditions</li>
        </ul>
          
    </div>
      </div>
    </div>
  )
}

export default Footer