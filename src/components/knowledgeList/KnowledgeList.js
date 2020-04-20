import React from 'react';

import KnowledgeContainer from '../knowledgeContainer/KnowledgeContainer';

import './KnowledgeList.scss';

// A list of stuff I know in a given category
export default function KnowledgeList(props) {
  const {categoryNumber, categoryName} = props;

  // An array of arrays containing the stuff I know
  // A single array contains three variables, the 1st is the name of the stuff I know,
  // the 2nd a rating out of 5 pertaining to how confident I am with the stuff and 
  // the 3rd the category the stuff belongs to, f.x. 1 is programming knowledge and 3 language knowledge
  const knowledgeArray = [
    ["Java", 3, 1], ["C++", 3, 1], ["C", 2, 1], ["C#", 2, 1], ["Python", 2, 1],
    ["HTML5", 3, 1], ["CSS", 3, 1], ["SASS", 2, 1], [".NET Core", 2, 1],
    ["React", 3, 1], ["Node.js", 2, 1],
    ["Typescript", 2, 1], ["Express.js", 2, 1], ["JSON", 3, 1],
    ["MySQL", 2, 1], ["PostgreSQL", 2, 1], ["Haskell", 1, 1],
    ["OpenGL", 1, 1], ["WebGL", 2, 1], ["LaTeX", 3, 2], ["Android Studio", 2, 2],
    ["IntelliJ IDEA", 2, 2], ["Matlab", 1, 2], ["Git", 3, 2], ["VSCode", 3, 2],
    ["Atom", 3, 2],
    ["Íslenska (Föðurtunga)", 3, 3], ["Enska (Móðurtunga)", 3, 3], ["Danska (Skóladanska)", 2, 3], ["Þýska (Ein bisschen)", 1, 3],
  ];

  // A function to sort the knowledgeArray by rating so the highest rating is at the top
  function sortByRating(know1, know2) {
    if (know1[1] === know2[1]) {
      return 0;
    } else {
      return (know1[1] < know2[1]) ? 1 : -1;
    }
  }

  // A function to prepare a category so it appears properly in two halves and in order
  function prepCategory(knowledgeArray) {
    const preppedArray = knowledgeArray.filter((know) => know[2] === categoryNumber).sort(sortByRating);
    const index = Math.ceil(preppedArray.length/2);
    const firstHalf = preppedArray.slice(0, index);
    const secondHalf = preppedArray.slice(index, preppedArray.length);
    
    return(
      <div className="know-list">
        <ul className="know-column">
          {firstHalf.map((know, i) => (
            <KnowledgeContainer
              key={i}
              title={know[0]}
              ratingAmount={know[1]}
            />
          ))}
        </ul>
        <ul className="know-column">
          {secondHalf.map((know, i) => (
            <KnowledgeContainer
              key={i+100}
              title={know[0]}
              ratingAmount={know[1]}
            />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={`know-category-${categoryName}`}>
      <h3 className={"category-title"}>{categoryName}</h3>
      {prepCategory(knowledgeArray)}
    </div>
  );
}