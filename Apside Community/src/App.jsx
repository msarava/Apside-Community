import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Favorites from './pages/Favorites';
import Projects from './pages/Projects';
import NewProject from './pages/NewProject';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/new-project' element={<NewProject />} />
    </Routes>
  );
}

export default App;
