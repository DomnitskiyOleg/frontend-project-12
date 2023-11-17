import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  Container,
  FloatingLabel,
  Image,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import * as formik from 'formik';
import { setUsername } from '../slices/usernameSlice';
import routes from '../routes/routes';
import useAuth from '../hooks';
import loginImage from '../assets/loginImage.png';

const LogIn = () => {
  const dispatch = useDispatch();
  const { Formik } = formik;
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const loginShema = yup.object().shape({
    username: yup.string().required('Это обязательное поле'),
    password: yup.string().required('Это обязательное поле'),
  });
  const [authFailed, setAuthFailed] = useState(false);
  const usernameInput = useRef();
  return (
    <div className="d-flex flex-grow-1 container-fluid justify-content-center align-items-center bg-light py-4">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-12 col-sm-8">
            <Card className="text-center">
              <Card.Body className="row p-5">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                  <Image src={loginImage} width="200" height="250" />
                </div>
                <Formik
                  validationSchema={loginShema}
                  onSubmit={async (userData, { setSubmitting }) => {
                    try {
                      const response = await axios.post(
                        routes.loginPath(),
                        userData,
                      );
                      localStorage.setItem(
                        'userId',
                        JSON.stringify(response.data),
                      );
                      dispatch(setUsername(response.data.username));
                      logIn();
                      navigate('/');
                    } catch (e) {
                      usernameInput.current.select();
                      setAuthFailed(true);
                      setSubmitting(false);
                      console.log(e);
                    }
                  }}
                  initialValues={{
                    username: '',
                    password: '',
                  }}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                  }) => (
                    <Form
                      noValidate
                      className="col-12 col-md-6 my-3"
                      onSubmit={handleSubmit}
                    >
                      <h1 className="mb-4">Войти</h1>
                      <Form.Group
                        className="mb-3"
                        controlId="validationFormik102"
                      >
                        <FloatingLabel
                          controlId="floatingUsername"
                          label="Ваш ник"
                        >
                          <Form.Control
                            type="username"
                            name="username"
                            onChange={handleChange}
                            isInvalid={authFailed || !!errors.username}
                            value={values.username}
                            placeholder="Ваш ник"
                            ref={usernameInput}
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.username || 'Неправильный логин или пароль'}
                          </Form.Control.Feedback>
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="validationFormik101"
                      >
                        <FloatingLabel
                          controlId="floatingPassword"
                          label="Пароль"
                        >
                          <Form.Control
                            type="password"
                            name="password"
                            onChange={handleChange}
                            isInvalid={authFailed || !!errors.password}
                            value={values.password}
                            placeholder="Пароль"
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.password || 'Неправильный логин или пароль'}
                          </Form.Control.Feedback>
                        </FloatingLabel>
                      </Form.Group>
                      <Button
                        className="w-100 mb-3"
                        variant="outline-primary"
                        type="submit"
                      >
                        Войти
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
              <Card.Footer className="text-muted p-3">
                Нет аккаунта?
                <Link to="/registration">Регистрация</Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogIn;
