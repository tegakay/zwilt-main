import React from 'react'
import shopify from "../../assets/infoCategories/shopify.png"

const InfoCategoriesCard = ({title,path}) => {

  
  return (
    <div className='info-category-card filler'>
        <div className="card-look">
        <div className="card-option">
            <img src={path} className='info-img'/>
            
        </div>
        <p>{(title == "Right" || title == "left")?"":`${title}`}</p>
        </div>
        
    </div>
  )
}

export default InfoCategoriesCard