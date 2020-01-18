import React from 'react';
import { FaStar } from 'react-icons/fa';

import './KnowledgeContainer.scss';

// A component containing a piece of knowledge I know with a rating of how confident I am with it
export default function KnowledgeContainer(props) {
  const {title, starAmount} = props;

  // Generates the stars, greyed out or not depending on how high of a rating I give
  function generateStars(stars) {
    if (stars > 5 || stars < 0) {
      console.error("A rating can only go from 0-5");
      return(<p>Error!</p>);
    }

    const starArray = [];
    // Non greyed out stars get the classname "star-filled"
    for (let i = 0; i < stars; i += 1) {
      starArray.push(
        <span className={"starSpan"} key={i}>
          <FaStar className={"star-filled"}/>
        </span>
      );
    }
    // Greyed out stars get the classname "star"
    for (let i = 0; i < 5 - stars; i += 1) {
      starArray.push(
        <span className={"starSpan"} key={i + stars}>
          <FaStar className={"star"}/>
        </span>
      );
    }
    return starArray;
  }

  return (
    <li className="know-container">
      <p className="know-title">{title}</p>
      <div className="know-stars">
        {generateStars(starAmount)}
      </div>
    </li>
  );
}