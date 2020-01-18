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
    ["Java", 5, 1], ["C++", 4, 1], ["C", 3, 1], ["Python", 4, 1],
    ["HTML5", 5, 1], ["CSS", 5, 1], ["SASS", 4, 1], ["JSX", 4, 1],
    ["EJS", 5, 1], ["React", 4, 1], ["Node.js", 4, 1], ["Babel", 4, 1],
    ["ES6", 4, 1], ["Typescript", 3, 1], ["Express.js", 3, 1], ["JSON", 4, 1],
    ["MySQL", 4, 1], ["PostgreSQL", 4, 1], ["Scheme", 2, 1], ["Haskell", 1, 1],
    ["OpenGL", 2, 1], ["WebGL", 3, 1], ["LaTeX", 5, 2], ["Android Studio", 3, 2],
    ["IntelliJ IDEA", 4, 2], ["Matlab", 3, 2], ["Git", 5, 2], ["VSCode", 5, 2],
    ["Atom", 5, 2],
    ["Íslenska(Föðurtunga)", 5, 3], ["Enska(Móðurtunga)", 5, 3], ["Danska(Skóladanska)", 3, 3], ["Þýska(Ein bisschen)", 1, 3],
  ];

  // A function to sort the knowledgeArray by rating so the highest rating is at the top
  function sortByRating(know1, know2) {
    if (know1[1] === know2[1]) {
      return 0;
    } else {
      return (know1[1] < know2[1]) ? 1 : -1;
    }
  }

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
              starAmount={know[1]}
            />
          ))}
        </ul>
        <ul className="know-column">
          {secondHalf.map((know, i) => (
            <KnowledgeContainer
              key={i+100}
              title={know[0]}
              starAmount={know[1]}
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