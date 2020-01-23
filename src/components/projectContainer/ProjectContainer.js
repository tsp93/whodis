import React from 'react';

import './ProjectContainer.scss';

// 
export default function ProjectContainer(props) {
  const { hyperref, image, altText, captionTitle, caption } = props;

  return (
    <div className="project">
      <figure className="projectImg">
        <a href={hyperref}>
          <img src={image} alt={altText}/>
          <figcaption>
            <h2>{captionTitle}</h2>
            <hr/>
            <p>{caption}</p>
          </figcaption>
        </a>
      </figure>
    </div>
  );
}