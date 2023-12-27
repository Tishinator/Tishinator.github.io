import React from 'react';
import './css/HomePage.css';

import useDocumentTitle from '../hooks/useDocumentTitle'

function HomePage() {
  useDocumentTitle('Tish');
  
  return (
    <div className="homepage">
      <h1>Welcome to My Homepage</h1>
      {/* Additional content will go here */}
    </div>
  );
}

export default HomePage;
