import React from 'react';
import './css/Header.css';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/assets/richard.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Home
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Header;
