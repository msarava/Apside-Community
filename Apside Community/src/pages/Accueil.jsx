import React from 'react';
import Actualites from '../components/Actualites';
import '../style/main.css';
import Favorites from '../components/Favorites';
import ProjectInProgress from '../components/ProjectInProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/material';

function Accueil() {
  return (
    <>
      <div className='badge-container'>
        <Actualites />
      </div>
      <ProjectInProgress />
      <Favorites />
    </>
  );
}

export default Accueil;
