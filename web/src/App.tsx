import React from 'react';

import logoImg from './assets/images/logo.svg';

import './styles/global.css';
import './styles/pages/landing.css';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>São Paulo</span>

          <a href="" className="enter-app"></a>
        </div>
      </div>
    </div>
  );
}

export default App;
