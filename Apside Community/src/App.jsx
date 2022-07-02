import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import NewProject from './pages/NewProject';
import Projects from './components/Projects';
import Favorites from "./components/Favorites";
import ProjectInProgress from './components/ProjectInProgress';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path='/Apside-Community' element={<Accueil />} />
      <Route path='/Apside-Community/favorites' element={<Favorites />} />
      <Route path='/Apside-Community/myprojects' element={<ProjectInProgress />} />
      <Route path='/Apside-Community/projects' element={<Projects />} />
      <Route path='/Apside-Community/new-project' element={<NewProject />} />
      <Route path='/Apside-Community/projects/:id' element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
