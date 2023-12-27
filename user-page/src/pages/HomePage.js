import React from 'react';
import './css/HomePage.css';

// components
import Header from '../components/Header';

// hooks
import useDocumentTitle from '../hooks/useDocumentTitle'

function HomePage() {
  useDocumentTitle('Tish');
  
  return (
    <div className="homepage">
      <Header />
      <h1>Welcome to My Homepage</h1>
      {/* Additional content will go here */}
    </div>
  );
}

export default HomePage;
