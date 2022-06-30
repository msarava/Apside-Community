import React from 'react';
import Actualites from '../components/Actualites';
import ProjectInProgress from '../components/projectInProgress';
import '../style/main.css'

function Accueil() {
  return (
    <> <div className='badge-container'>
      <Actualites />
    </div>
      <ProjectInProgress />
     
    </>
  );
}

export default Accueil;
