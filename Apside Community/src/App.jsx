import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/accounts' element={<Accueil />} />
      </Routes>
    </Router>
  );
}

export default App;
