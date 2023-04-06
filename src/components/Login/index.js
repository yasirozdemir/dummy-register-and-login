import { useEffect } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginFunction = async () => {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const loginInfo = {
      email: email.value,
      password: password.value,
    };
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
        localStorage.setItem("accessToken", resJson.accessToken);
        navigate("/");
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
  useEffect(() => {
    document.title = "Login";
    localStorage.clear();
    // eslint-disable-next-line
  }, []);
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
            <div className="d-flex flex-column">
              <Button variant="primary" type="submit" className="mb-2">
                Login
              </Button>
              <a
                href={process.env.REACT_APP_BE_URL + "/authors/me/googleLogin"}
                style={{ textDecoration: "none" }}
              >
                <GoogleButton className="w-100 rounded" />
              </a>
              <span className="mx-3">OR</span>
              <Link to="/register" className="btn btn-info">
                Register
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
