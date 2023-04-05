import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const accessToken = localStorage.getItem("accessToken");
  const getUserData = async () => {
    try {
      const res = await fetch("http://localhost:3001/authors/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        const userData = await res.json();
        console.log(userData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, []);
  return (
    <Container fluid>
      <Row>HELO</Row>
    </Container>
  );
};

export default Home;
