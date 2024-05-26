import lightplay from "../assets/learningSteps/light-play.png";
import darkplay from "../assets/learningSteps/dark-play.png";

const LearningStepsCard = ({title,step,text}) => {
  return (
    <div className="learning-card">
          <div className="learning-img">
            <img src={darkplay} />
          </div>
          <p>
            <span className="bold">Step 1:</span> Resume Screening
          </p>
        </div>
  )
}

export default LearningStepsCard