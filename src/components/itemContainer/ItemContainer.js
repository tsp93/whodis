import React from 'react';

import './ItemContainer.scss';

export default function ItemContainer(props) {
  const {place, years, title, info} = props;

  return (
    <div className="item-container">
      <div className="left-side">
        <h3 className="itemPlace">{place}</h3>
        <p className="itemYears">{years}</p>
      </div>
      <div className="right-side">
        <h5 className="itemTitle">{title}</h5>
        <p className="itemInfo">{info}</p>
      </div>
    </div>
  );
}