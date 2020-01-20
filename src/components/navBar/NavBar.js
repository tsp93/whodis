import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { configureAnchors } from 'react-scrollable-anchor';

import './NavBar.scss';

configureAnchors({offset: -100, scrollDuration: 10});

// A navigation bar for the frontpage
export default function NavBar(props) {
  const {chapters} = props;
  const [collapsed, setCollapsed] = useState(true);
  const [sticky, setSticky] = useState(false);
  const [hash, setHash] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener("hashchange", handleHash);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("hashchange", handleHash);
    };
  })

  // Makes the navigation bar fixed when below a certain point
  function handleScroll() {
    if (window.scrollY > 920) {
      setSticky(true);
    } else {
      setSticky(false);
    }
    handleHash();
  }

  // Handles the location hash change
  function handleHash() {
    if (window.location.hash === "") {
      setHash('');
    } else if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      setHash('contact');
    } else {
      setHash(window.location.hash.slice(1));
    }
  }

  // Collapses the drop down menu
  function collapseMenu() {
    setCollapsed(!collapsed);
    if (window.innerWidth <= 1200) {
      configureAnchors({offset: -100, scrollDuration: 10});
    } else {
      configureAnchors({offset: -20, scrollDuration: 10});
    }
  }

  return (
    <div className={`navbar ${(sticky) ? 'sticky' : ''}`}>
      <button className="navbutton" onClick={collapseMenu}>
        <FaBars/>
      </button>
      <div className={`navcontent ${(collapsed) ? 'collapsed' : ''}`}>
        {chapters.map((chapter, i) => (
          <a key={i} className={`navlink ${(chapter[0] === hash) ? 'filled' : ''}`} href={`#${chapter[0]}`} onClick={collapseMenu}>
            {chapter[1]}
          </a>
        ))}
      </div>
    </div>
  );
}