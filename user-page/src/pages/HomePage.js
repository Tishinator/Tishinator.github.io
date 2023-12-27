import React from 'react';
import './css/HomePage.css';
import Alert from 'react-bootstrap/Alert';

// components
import Header from '../components/Header';

// hooks
import useDocumentTitle from '../hooks/useDocumentTitle'

function HomePage() {
  useDocumentTitle('Tish');
  
  return (
    
    <div>
      <Header />
      <div className="homepage">
        <Alert key='warning' variant='warning'>
          Site under construction. Please mind the mess
        </Alert>
      </div>
      {/* Additional content will go here */}
    </div>
  );
}

export default HomePage;
