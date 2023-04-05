import { useEffect } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const loginFunction = async () => {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const loginInfo = {
      email: email.value,
      password: password.value,
    };
    console.log(loginInfo);
    try {
      const res = await fetch("http://localhost:3001/authors/me/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        email.value = "";
        password.value = "";
        const resJson = await res.json();
        console.log(resJson.accessToken);
      } else {
        alert("Something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginFunction();
  };
  return (
    <Container>
      <Row id="login" className="justify-content-center align-items-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
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
            <Button variant="primary" type="submit">
              Login
            </Button>
            <span className="mx-3">OR</span>
            <Link to="/register" className="btn btn-info">
              Register
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
