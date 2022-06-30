import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Favorites from './components/Favorites';
import Projects from './pages/Projects';
import ProjectInProgress from './components/ProjectInProgress';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/myprojects' element={<ProjectInProgress />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}

export default App;
