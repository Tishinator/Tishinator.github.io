import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';


const UnderConstruction = () => {
  const gifUrl = "https://i.redd.it/q0dd3k02unqb1.gif"; // URL of the GIF
  return (
    <div style={{
      height: '100vh', // Full viewport height
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      backgroundColor: 'black' // Black background
    }}>
      <img src={gifUrl} alt="Under Construction" />
    </div>
  );
};


function App() {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  return isLocalhost ?  
  <div className="App">
    <Router>
        <Header />
        < Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </Router>
  </div>: 
  <UnderConstruction />;

}

export default App;
