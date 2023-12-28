import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Header from './components/Header';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
