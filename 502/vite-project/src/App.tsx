import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Clase2 from './class2/A01028066/ejemplo';

function App() {
  return (
    <Router>
      <div>
        <h1>Lisette Melo Reyes A01028066</h1>
        <div className="button">
        <button onClick={() => window.location.href = '/src/class1/L03535511/index.html'}>
          Clase 1
        </button>
      </div>
        <div className="button">
          <Link to="/clase2"><button>Clase 2</button></Link>
        </div>

        <Routes>
          <Route path="/clase2" element={<Clase2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

