import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Projects from './pages/Projects';
import NewProject from './pages/NewProject';
import ProjectInProgress from './components/ProjectInProgress';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/myprojects' element={<ProjectInProgress />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/new-project' element={<NewProject />} />
      <Route path='/projects/:id' element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
