import { Col, Container, Row } from "react-bootstrap";
import Adds from "./Adds";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Newsfeed from "./Newsfeed";
import Profile from "./Profile";



const Home = () => {
  return (
   <>
    <Container fluid={'xl'}className="mt-5">
      <Row>
        <Col md={4} lg={4} xl={3} xxl={3}>
          <Profile />
        </Col>
        <Col md={8} lg={8} xl={7} xxl={7}>
          <Feedback />
          <Newsfeed />
        </Col>
        <Col md={0} lg={0} xl={2} xxl={2} className="d-none d-xl-block">
          <Adds />
        </Col>
      </Row>
    </Container>
    <Footer />
   </>
  );
  };
  
  export default Home;
