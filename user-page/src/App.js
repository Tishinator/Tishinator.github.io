import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Header from './components/Header';
import Home from './pages/Home';

import { CarouselProvider } from './context/CarouselProvider';


function App() {
  return (
    <div className="App">
      <Router>
        <CarouselProvider> {/* This provides context for the carousel (controlled by the header) */}
          <Header />
          < Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </CarouselProvider>
      </Router>
    </div>
  );
}

export default App;
