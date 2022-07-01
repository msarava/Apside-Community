import React from 'react';
import Actualites from '../components/Actualites';
import '../style/main.css';
import Projects from '../components/Projects';

function Accueil() {
  return (
    <div>
      <div className='badge-container'>
        <Actualites />
      </div>
      <div>
      <Projects myproject={true}/>
      <Projects  favoris={true}/>
      </div>
      </div>
  );
}

export default Accueil;
