import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Favorites from './pages/AllFavorites';
import Projects from './pages/Projects';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}

export default App;
