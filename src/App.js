import React from 'react';
import Helmet from 'react-helmet';

import ItemContainer from './components/itemContainer/ItemContainer';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Helmet title="Thomas Samúel Pálsson - Ferilskrá" />
      <header className="frontpage-header">
        <h1>Thomas Samúel Pálsson <hr/></h1>
        <h2>Ferilskrá</h2>
      </header>
      <div className="info">
        <div className="about">
          <h2>Um mig</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet dignissim augue quis laoreet. 
          Ut et dui non massa elementum tristique. In consequat at nisl molestie tempus. 
          Integer vitae vulputate neque. Fusce et tortor commodo urna dignissim rutrum ut tristique ipsum. Maecenas vulputate, 
          odio id iaculis posuere, arcu massa placerat arcu, non pretium nisi turpis gravida magna. Orci varius natoque penatibus 
          et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ut scelerisque elit, nec sollicitudin neque. Curabitur 
          posuere euismod ipsum, rhoncus eleifend orci dapibus at. Pellentesque fringilla quis velit ut viverra. Suspendisse 
          pulvinar massa quis nunc cursus maximus. Curabitur vestibulum malesuada arcu, in sodales eros sodales at. Nunc magna 
          tellus, interdum faucibus leo sed, commodo vestibulum lacus. Aliquam sed elit id nulla mattis ornare rhoncus vel ex.</p>
          <hr/>
        </div>
        <div className="education">
          <h2>Menntun</h2>
          <ItemContainer
            place={'Háskóli Íslands'}
            years={'2016-2019'}
            title={'Bachelor - Hugbúnaðarverkfræði (Software Engineering)'}
            info={'Útskrifaðist vorið 2019 með fyrstu einkunn. Ég lærði margt og mikið í mörgum mismunandi áföngum eins og Vefforritun, Verkefnastjórnun og Gervigreind. Mér gekk yfirleitt betur í forritunaráföngum frekar en verkfræðiáföngum.'}
          />
          <ItemContainer
            place={'Menntaskólinn í Reykjavík'}
            years={'2009-2013'}
            title={'Stúdentspróf - Náttúrufræðibraut'}
            info={'Útskrifaðist vorið 2013 af náttúrufræðibraut. Ég kynntist á seinasta ári forritun í fyrsta sinn gegnum valáfanga sem kenndi Java.'}
          />
          <hr/>
        </div>
        <div className="knowledge">
          <h2>Kunnátta</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet dignissim augue quis laoreet. 
          Ut et dui non massa elementum tristique. In consequat at nisl molestie tempus. 
          Integer vitae vulputate neque. Fusce et tortor commodo urna dignissim rutrum ut tristique ipsum. Maecenas vulputate, 
          odio id iaculis posuere, arcu massa placerat arcu, non pretium nisi turpis gravida magna. Orci varius natoque penatibus 
          et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ut scelerisque elit, nec sollicitudin neque. Curabitur 
          posuere euismod ipsum, rhoncus eleifend orci dapibus at. Pellentesque fringilla quis velit ut viverra. Suspendisse 
          pulvinar massa quis nunc cursus maximus. Curabitur vestibulum malesuada arcu, in sodales eros sodales at. Nunc magna 
          tellus, interdum faucibus leo sed, commodo vestibulum lacus. Aliquam sed elit id nulla mattis ornare rhoncus vel ex.</p>
        </div>
      </div>
      <footer className="frontpage-footer">
        <h1>Hafa Samband</h1>
        <div className="contact-details">
          <div className="email">
            <p>Netfang:</p>
            <p>thomasspalsson@gmail.com</p>
          </div>
          <div className="phone">
            <p>Sími:</p>
            <p>(+354) 858 7793</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
