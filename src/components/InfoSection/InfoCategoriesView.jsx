import React from "react";
import InfoCategoriesCard from "./InfoCategoriesCard";
import categories from "../../db/categories";

const InfoCategoriesView = ({ title }) => {
  let lists = categories.slice(0, 6).map((id) => {
    return (
      
        <InfoCategoriesCard title={id.name} path={id.path} key={title} />
      
    );
  });
  let otherlist = categories.slice(6, 13).map((id) => {
    return (
      <>
        <InfoCategoriesCard title={id.name} path={id.path} key={title} />
      </>
    );
  });

  return (
    <>
      <div className="info-card">
        <p className="info-card-header">IT & Development</p>
        <div className="info-list">{lists}</div>
      </div>

      <div className="info-card">
        <p className="info-card-header">Design and Creative</p>
        <div className="info-list">{otherlist}</div>
      </div>
    </>
  );
};

export default InfoCategoriesView;
