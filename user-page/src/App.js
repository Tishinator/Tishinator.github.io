import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Header from './components/Header';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate replace to="/about" />} />
          <Route path='/about' Component={AboutMe} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
