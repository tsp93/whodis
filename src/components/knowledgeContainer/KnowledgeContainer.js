import React, { Fragment } from 'react';

import './KnowledgeContainer.scss';

// A component containing a piece of knowledge I know with a rating of how confident I am with it
export default function KnowledgeContainer(props) {
  const {title, ratingAmount} = props;

  // Generates the rating
  function generateRating(rating) {
    if (rating > 3 || rating < 0) {
      console.error("A rating can only go from 0-3");
      return(<p>Invalid rating!</p>);
    }

    return (
      <Fragment>
        <p className={ratingAmount === 1 ? 'text selected' : 'text'}>Sæmileg</p>
        <p> | </p>
        <p className={ratingAmount === 2 ? 'text selected' : 'text'}>Góð</p>
        <p> | </p>
        <p className={ratingAmount === 3 ? 'text selected' : 'text'}>Ágæt</p>
      </Fragment>
    );
  }

  return (
    <li className="know-container">
      <p className="know-title">{title}</p>
      <div className="know-rating">
        {generateRating(ratingAmount)}
      </div>
    </li>
  );
}