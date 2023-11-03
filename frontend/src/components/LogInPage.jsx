import React from 'react';
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
import * as yup from 'yup';
import * as formik from 'formik';

const LogIn = () => {
  const { Formik } = formik;
  const loginShema = yup.object().shape({
    username: yup.string().required().min(5),
    password: yup.string().required().min(6),
  });
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-12 col-sm-8">
          <Card className="text-center">
            <Card.Body className="row p-5">
              <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <Image width="200" height="250" src="3.png" />
              </div>
              <Formik
                validationSchema={loginShema}
                onSubmit={() => {}}
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
                  <Form noValidate className="col-12 col-md-6 my-3" onSubmit={handleSubmit}>
                    <h1 className="mb-4">Войти</h1>
                    <Form.Group className="mb-3" controlId="validationFormik102">
                      <FloatingLabel controlId="floatingUsername" label="Ваш ник">
                        <Form.Control
                          type="username"
                          name="username"
                          onChange={handleChange}
                          isInvalid={!!errors.username}
                          value={values.username}
                          placeholder="Ваш ник"
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.username}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="validationFormik101">
                      <FloatingLabel controlId="floatingPassword" label="Пароль">
                        <Form.Control
                          type="password"
                          name="password"
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                          value={values.password}
                          placeholder="Пароль"
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.password}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                    <Button className="w-100 mb-3" variant="outline-primary" type="submit">Войти</Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
            <Card.Footer className="text-muted p-3">
              Нет аккаунта?
              {' '}
              <a href="a">Регистрация</a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>

  );
};

export default LogIn;
