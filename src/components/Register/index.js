import { useEffect } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);
  const registerFunction = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    registerFunction();
  };
  return (
    <Container>
      <Row id="login" className="justify-content-center align-items-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                id="name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your surname"
                id="surname"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                id="email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
              />
            </Form.Group>
            <Button variant="info" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
