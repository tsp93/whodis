import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { FaChevronDown } from 'react-icons/fa';
import ScrollableAnchor from 'react-scrollable-anchor';

import NavBar from '../../components/navBar/NavBar';
import EducationContainer from '../../components/educationContainer/EducationContainer';
import KnowledgeList from '../../components/knowledgeList/KnowledgeList';
import ContactDetail from '../../components/contactDetail/ContactDetail';

import './Frontpage.scss';

// The frontpage where the resumé resides
export default function Frontpage() {
 
  return (
    <Fragment>
      <Helmet title="Thomas Samúel Pálsson - Ferilskrá" />
      <header className="frontpage-header">
        <h1>Thomas Samúel Pálsson <hr/></h1>
        <h2>Ferilskrá</h2>
        <a href="#about" className="scroll-down">
          <span className={'arrow-down'}>
            <FaChevronDown />
          </span>
        </a>
      </header>
      <NavBar 
        chapters={[['about', 'Um mig'], ['education', 'Menntun'], ['knowledge', 'Kunnátta'], ['contact', 'Hafa samband']]}
      />
      <div className="info">
        <ScrollableAnchor  id={'about'}>
          <div className="about">
            <h1>Um mig</h1>
            <p></p>
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
              categoryName={"Forritunarkunnátta"}
            />
            <KnowledgeList
              categoryNumber={2}
              categoryName={"Tæknikunnátta"}
            />
            <KnowledgeList
              categoryNumber={3}
              categoryName={"Tungumál"}
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
              <a href="https://www.linkedin.com/in/thomas-p%C3%A1lsson-0159b6153/">LinkedIn</a>
              <a href="https://github.com/tsp93">Github</a>
            </div>
          </div>
        </footer>
      </ScrollableAnchor>
    </Fragment>
  );
}