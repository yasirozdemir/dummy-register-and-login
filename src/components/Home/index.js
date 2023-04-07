import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import Blogposts from "../Posts";

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    let accessToken = localStorage.getItem("accessToken");
    if (!accessToken) navigate("/login");
    if (searchParams.get("accessToken")) {
      accessToken = searchParams.get("accessToken");
      navigate("/");
    }
    getUserData(accessToken);
    getBlogposts(accessToken);
    // eslint-disable-next-line
  }, []);

  const getUserData = async (token) => {
    try {
      const res = await fetch(process.env.REACT_APP_BE_URL + "/authors/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const userData = await res.json();
        setUser(userData);
      } else {
        console.log("error setting user data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getBlogposts = async (token) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_BE_URL + "/authors/me/blogposts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        const blogPostsData = await res.json();
        setPosts(blogPostsData);
      } else {
        console.log("error setting user data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <img src={user?.avatar} alt="avatar" className="rounded-circle" />
            <h5>
              {user?.name} {user?.surname}
            </h5>
          </div>
        </Col>
      </Row>
      <Row>
        <Blogposts posts={posts} />
      </Row>
      <Button type="button" variant="danger" onClick={logOut}>
        Log Out
      </Button>
    </Container>
  );
};

export default Home;
