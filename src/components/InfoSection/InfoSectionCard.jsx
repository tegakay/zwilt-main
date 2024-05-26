import React from 'react'
import infoprofiles from "../../assets/info-profiles.png"
import infosubcategory from "../../assets/info-subcategory.png"
import infoSkills from "../../assets/infoSkills.png"

const InfoSectionCard = ({text,skill,subcategory,profiles}) => {
  return (
    <div className='card'>
        <p className='card-title'>Find Dev and IT professionals to scale your business</p>

        <ul className='card-items'>
            <li className='card-items-list'><img src={infoSkills} className='card-list'/> 989 skills</li>
            <li className='card-items-list'> <img src={infosubcategory} className='card-list'/> 45 Sub-Categories</li>
            <li className='card-items-list'> <img src={infoprofiles} className='card-list'/> 1011 Profiles</li>
        </ul>
    </div>
  )
}

export default InfoSectionCard