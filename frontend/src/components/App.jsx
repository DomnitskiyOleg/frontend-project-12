import React, { useState } from 'react';
import { gsap } from "gsap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';
import NotFound from './NotFoundPage';
import '../App.css';


function App() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.07 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <Router>
      <Navbar expand="lg" className="shadow-sm bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <img
              alt=""
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Small Talk
          </Navbar.Brand>
          <Button className="btn btn-primary">Выйти</Button>
        </Container>
      </Navbar>
      <Container className='h-100 pagecontainer bg-success d-flex align-items-center justify-content-center'>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={null} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
