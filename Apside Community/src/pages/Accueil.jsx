import React from 'react';
import Favorites from '../components/Favorites';
import ProjectInProgress from '../components/ProjectInProgress';

function Accueil() {
  return (
    <div>
      Page d'accueil
      <div />
      <ProjectInProgress />
      <br />
      <br />
      <br />
      <Favorites />
    </div>
  );
}

export default Accueil;
