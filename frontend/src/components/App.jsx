import React from 'react';
import { gsap } from 'gsap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import AuthProvider from './AuthProvider';
import NotFound from './NotFoundPage';
import LogIn from './LogInPage';
import LogOutButton from './LogOutButton';
import PrivateRoute from './PrivateRoute';
import Registration from './Registration';
import Chat from './Chat';
import '../App.css';
import 'bootstrap/dist/js/bootstrap.min';

function App() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.07 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  return (
    <AuthProvider>
      <Router>
        <Navbar expand="lg" className="shadow-sm bg-body-wigth">
          <Container>
            <Navbar.Brand
              as={Link}
              to="/"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <img
                alt=""
                src="logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' '}
              Small Talk
            </Navbar.Brand>
            <LogOutButton />
          </Container>
        </Navbar>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={<PrivateRoute><Chat /></PrivateRoute>}
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
