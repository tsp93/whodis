import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import { FaChevronDown, FaLinkedin, FaGithub } from 'react-icons/fa';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

import NavBar from '../../components/navBar/NavBar';
import EducationContainer from '../../components/educationContainer/EducationContainer';
import KnowledgeList from '../../components/knowledgeList/KnowledgeList';
import ProjectContainer from '../../components/projectContainer/ProjectContainer';
import ContactDetail from '../../components/contactDetail/ContactDetail';

import vefforritunarbudin from '../../images/vefforritunarbudin.JPG';
import pacalot from '../../images/Pacalot.png';
import breakout from '../../images/breakout.JPG';

import './Frontpage.scss';

// The frontpage where the resumé resides
export default function Frontpage() {

  function getAge() {
    const today = new Date();
    const birthDate = new Date("06/12/1993");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }

    return age;
  }
 
  return (
    <Fragment>
      <Helmet title="Thomas Samúel Pálsson - Ferilskrá" />
      <header className="frontpage-header">
        <h1>Thomas Samúel Pálsson <hr/></h1>
        <h2>Ferilskrá</h2>
        <a href="#about" className="scroll-down" onClick={() => {(window.innerWidth <= 1200) ? configureAnchors({offset: -100, scrollDuration: 10}) : configureAnchors({offset: -20, scrollDuration: 10});}}>
          <span className={'arrow-down'}>
            <FaChevronDown />
          </span>
        </a>
      </header>
      <NavBar 
        chapters={[['about', 'Um mig'], ['education', 'Menntun'], ['knowledge', 'Kunnátta'], ['projects', 'Verkefni'], ['contact', 'Hafa samband']]}
      />
      <div className="info">
        <ScrollableAnchor  id={'about'}>
          <div className="about">
            <h1>Um mig</h1>
              <p>Thomas Samúel Pálsson heiti ég, útskrifaður nemandi úr HÍ þar sem ég hlaut B.Sc. gráðu í hugbúnaðarverkfræði. 
                Ég er {getAge()} ára að aldri, dugnaðardrengur, frábær, æðislegur og umfram allt hógvær. Áhugasamur um margs konar
                forritun, jafnframt fram- og bakendaforritun, og tilbúinn í allt. Ég á það til að aðlagast nýjum hlutum frekar fljótt.</p>
            <hr/>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor  id={'education'}>
          <div className="education">
            <h1>Menntun</h1>
            <EducationContainer
              place={'Háskóli Íslands'}
              years={'2016-2019'}
              title={'Bachelor - Hugbúnaðarverkfræði (Software Engineering)'}
              info={'Útskrifaðist vorið 2019 með fyrstu einkunn. Ég lærði margt og mikið í mörgum mismunandi áföngum eins og Vefforritun, Verkefnastjórnun og Gervigreind. Mér gekk yfirleitt betur í forritunaráföngum frekar en verkfræðiáföngum.'}
            />
            <EducationContainer
              place={'Menntaskólinn í Reykjavík'}
              years={'2009-2013'}
              title={'Stúdentspróf - Náttúrufræðibraut'}
              info={'Útskrifaðist vorið 2013 af náttúrufræðibraut. Ég kynntist á seinasta ári forritun í fyrsta sinn gegnum valáfanga sem kenndi Java.'}
            />
            <hr/>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor  id={'knowledge'}>
          <div className="knowledge">
            <h1>Kunnátta</h1>
            <KnowledgeList
              categoryNumber={1}
              categoryName={'Forritunarkunnátta'}
            />
            <KnowledgeList
              categoryNumber={2}
              categoryName={'Tæknikunnátta'}
            />
            <KnowledgeList
              categoryNumber={3}
              categoryName={'Tungumál'}
            />
            <hr/>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor  id={'projects'}>
          <div className="projects">
            <h1>Verkefni</h1>
            <ProjectContainer
              hyperref={'https://vef2-h2-mak78-tsp3-pab14.herokuapp.com/'}
              image={vefforritunarbudin}
              altText={'An online shopping system'}
              captionTitle={'Vefforritunarbúðin'}
              caption={'Hópverkefni í vefforritun'}
            />
            <ProjectContainer
              hyperref={'https://notendur.hi.is/~tsp3/tolvuleikjaforritun/PacSnake/'}
              image={pacalot}
              altText={'A hybrid between Pacman and Snake'}
              captionTitle={'PacSnake'}
              caption={'Hópverkefni í tölvuleikjaforritun'}
            />
            <ProjectContainer
              hyperref={'https://notendur.hi.is/~tsp3/tolvuleikjaforritun/breakout/'}
              image={breakout}
              altText={'The classic game Breakout'}
              captionTitle={'Breakout'}
              caption={'Einstaklingsverkefni í tölvuleikjaforritun'}
            />
          </div>
        </ScrollableAnchor>
      </div>
      <ScrollableAnchor  id={'contact'}>
        <footer className="frontpage-footer">
          <h1>Hafa samband</h1>
          <div className="contact-details">
            <ContactDetail
              contact={'Netfang:'}
              details={'thomasspalsson@gmail.com'}
            />
            <ContactDetail
              contact={'Sími:'}
              details={'(+354) 858 7793'}
            />
            <div className="links">
              <a href="https://www.linkedin.com/in/thomas-p%C3%A1lsson-0159b6153/">
                <FaLinkedin className="linkedIn"/>
              </a>
              <a href="https://github.com/tsp93">
                <FaGithub className="github"/>
              </a>
            </div>
          </div>
        </footer>
      </ScrollableAnchor>
    </Fragment>
  );
}