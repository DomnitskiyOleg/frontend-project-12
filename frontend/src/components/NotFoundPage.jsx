import React, { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Card, Row, Col } from 'react-bootstrap';

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
    <Row className="justify-content-center">
      <Col className="col-12 col-sm-4">
        <Card className="text-center border-light-subtle shadow-sm">
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
      </Col>
    </Row>
  );
};

export default NotFound;
