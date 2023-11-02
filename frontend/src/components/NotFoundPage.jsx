import React, { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

gsap.registerPlugin(TextPlugin);

const NotFound = () => {
  const component = useRef();
  const header = useRef(null);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(header.current, {
        duration: 1.2,
        text: 'Страница не найдена :-(',
      });
    }, component);
    return () => ctx.revert();
  }, []);
  const onClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Container
      ref={component}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <Card className="text-center m-5 col-lg-6 col-12 border-light-subtle">
        <Card.Img variant="top" src="404.gif" />
        <Card.Body>
          <Card.Title className="header h4 text-muted" ref={header}>
            {' '}
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <p className="text-muted">
            Перейти на
            {' '}
            <a href="a" onClick={onClick}>
              главную страницу
            </a>
          </p>
        </Card.Footer>
      </Card>
      <h1> </h1>
    </Container>
  );
};

export default NotFound;
