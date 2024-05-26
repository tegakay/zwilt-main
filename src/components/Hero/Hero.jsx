import React from "react";
import heroIcon from "../../assets/hero-icon.png";
import zwiltlogosm from "../../assets/zwilt-logo-sm.png";
import './Hero.css'

const Hero = () => {
  return (
    <div className=" container hero">
      <div className="hero-primary-slot">
        <h1 className="hero-header">
          Finding the right fit{" "}
          <span>
            <img src={heroIcon} className="hero-new-img" />{" "}
          </span>{" "}
          has never been easier
        </h1>
        <p className="hero-text">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>

        <div className="hero-form">
          <input
            type="text"
            placeholder="Looking for design |"
            className="hero-form-input"
          />
          <button className="hero-form-btn filler">
            <img src={zwiltlogosm} />
          </button>
        </div>
      </div>

      <div className="secondary-hero">
        <div  className="secondary-hero-container">
          <ul className="secondary-hero-header">
            <li className="secondary-hero-header-list secondary-hero-header-list-first">IT & Development</li>
            <li className="secondary-hero-header-list">Design and Creative</li>
          </ul>
        </div>

        <div className="hero-list">
          <ul className="hero-lists">
            <li className="hero-lists-item">Python Developer</li>
            <li className="hero-lists-item">Shopify Developer</li>
            <li className="hero-lists-item">MERN Stack Developer</li>
            <li className="hero-lists-item">FULL Stack Developer</li>
          </ul>

          <ul className="hero-lists">
            <li className="hero-lists-item">Data Scientit</li>
            <li className="hero-lists-item">Front end Developer</li>
            <li className="hero-lists-item">Shopify Develope</li>
            <li className="hero-lists-item">Python Developer</li>
          </ul>

          <ul className="hero-lists">
            <li className="hero-lists-item">Shopify Developer</li>
            <li className="hero-lists-item">Python Developer</li>
            <li className="hero-lists-item">FullStack Developer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
