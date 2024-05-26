import React from "react";
import testimony from "../../assets/testimony/testimony-quote.png";
import groove from "../../assets/testimony/groove.png";
import zwiltlogo from "../../assets/zwilt-logo-sm.png";
import zwiltlogorv from "../../assets/zwilt-logo-sm-rv.png";
import quotes from "../../assets/testimony/quotes.png"
import './Testimony.css'

const Testimony = () => {
  return (
    <div className="testimony-main container">
      <div className="testimony-container">
      <div className="testimny-img">
      
      <img src={quotes}/>
    </div>
    <div className="testimony">
    <div className="testimony-quote">
      <h2>
        How it worked for Jason <img src={testimony} className="testimony-img" /> at <span className="groove">groove</span>{" "}
        
      </h2>
      <p className="testimony-text">
        zwilt enabled us to deliver on time and they've been heavy hitters in
        our corner since
      </p>
      <div className="row">
        <div className="testimony-icon">
          <img src={zwiltlogorv} />
        </div>
        <div className="testimony-icon">
          <img src={zwiltlogo} />
        </div>
      </div>
    </div>

    <div className="testimony-owner">
      <div>
        <div className="testimony-card">
          <img className="testimony-owner-image" src={groove} />
          <div className="testimony-card-text">
            <h3>Jason Maaki</h3>
            <p>Engineer at GROOVE</p>
            <p>San Francisco</p>
          </div>
        </div>

        <div>
          <p>
            Zwilt enabled us to deliver on time and they've been heavy hitters
            in our corner since. Zwilt enabled us to deliver on time and
            they've been heavy hitters in our corner since. Zwilt enabled us
            to deliver on time and they've been heavy hitters in our corner
            since.
          </p>
        </div>
      </div>
    </div>
    </div>
      </div>
      
    </div>
  );
};

export default Testimony;
