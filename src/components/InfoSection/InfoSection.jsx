import React from "react";
import InfoSectionCard from "./InfoSectionCard";
import skills from "../../db/skills";
import InfoCategories from "./InfoCategories";
import ExploreInfo from "./ExploreInfo";
import './InfoSection.css'

const InfoSection = () => {
  return (
    <div className="infoSection container">
      
      
      <div className="info-child">
      <h2 className="infosection-header">
        Your one-stop marketplace for finding the talent your business needs.
      </h2>
      <div className="info">
        <ExploreInfo/>
        <InfoCategories />
      </div>
      </div>
    </div>
  );
};

export default InfoSection;
