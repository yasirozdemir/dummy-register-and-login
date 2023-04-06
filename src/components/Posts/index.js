import { Col } from "react-bootstrap";

const Blogposts = ({ posts }) => {
  console.log(posts);
  return (
    <>
      {posts?.map((post) => {
        return (
          <Col key={post?._id}>
            <div className="w-50">
              <img src={post?.cover} alt="cover" className="w-100" />
            </div>
            <h3>{post?.title}</h3>
            <h6>{post?.category}</h6>
            <p>{post?.content}</p>
          </Col>
        );
      })}
    </>
  );
};

export default Blogposts;
