import React from "react";
import lightplay from "../../assets/learningSteps/light-play.png";
import darkplay from "../../assets/learningSteps/dark-play.png";
import './LearningSteps.css'

const LearningSteps = () => {
  return (
    <div className="learning-steps container">
      <h2 className="learning-header">How we ensure youre in good hands</h2>
      <p className="learning-text">
        With our comprehensie screening process, we hand-pick highly skilled
        candidates so you can onboard them in a matter of days
      </p>
      <div>
        <div className="learning-card-full">
          <div className="learning-card">
            <div className="learning-img">
              <img src={darkplay} />
            </div>
            <p>
              <span className="bold">Step 1:</span> Resume Screening
            </p>
          </div>
        </div>

        <div className="learning-card-full">
          <div className="learning-card">
            <div className="learning-img">
              <img src={darkplay} />
            </div>
            <p>
              <span className="bold">Step 2:</span> Video Interview
            </p>
          </div>
          <p>
            Candidates are assessed through skill based questions in a virtual
            setting. Allowing you to guage personality and cultural fit
          </p>
        </div>

        <div className="learning-card-full">
          <div className="learning-card">
            <div className="learning-img">
              <img src={darkplay} />
            </div>
            <p>
              <span className="bold">Step 3:</span> Technical Evaluation
            </p>
          </div>
        </div>

        <div className="learning-card-full">
          <div className="learning-card">
            <div className="learning-img">
              <img src={darkplay} />
            </div>
            <p>
              <span className="bold">Step 4:</span> Application Review
            </p>
          </div>
        </div>

        <div className="learning-card-full">
          <div className="learning-card">
            <div className="learning-img">
              <img src={darkplay} />
            </div>
            <p>
              <span className="bold">Step 5:</span> Lets get to work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSteps;
