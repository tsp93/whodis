import React from 'react';

import './EducationContainer.scss';

// A component that shows a piece of my education
export default function EducationContainer(props) {
  const {place, years, title, info} = props;

  return (
    <div className="edu-container">
      <div className="left-side">
        <h3 className="eduPlace">{place}</h3>
        <p className="eduYears">{years}</p>
      </div>
      <div className="right-side">
        <h5 className="eduTitle">{title}</h5>
        <p className="eduInfo">{info}</p>
      </div>
    </div>
  );
}