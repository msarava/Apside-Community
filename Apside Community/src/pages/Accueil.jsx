import React from 'react';
import ProjectInProgress from '../components/projectInProgress';
import Favorites from "../components/Favorites";

function Accueil() {
  return <div>Page d'accueil
    <div><ProjectInProgress /></div>
    <br/>
    <br/>
    <br/>
    <div><Favorites /></div>
  </div>;
}

export default Accueil;
