import { Col, Row, Image } from "react-bootstrap";
import profile from "./Images/profile.jpg";



const Newsfeed = () => {
const users = ["John", "Wiily", "Sabastian", "Katty", "Jason"];
  return (
    users.map((user)=>{
      return(
        <Row className="mt-3">
        <Col md={3}>
          <div className="text-center border border-2 border-ligh rounded bg-light">
          <p>{user}</p>
          <Image fluid src= {profile} width={100} height={100} alt='Avatar' />
          </div>
        </Col>
        <Col md={9}>
        <div className="text-center border border-2 border-ligh rounded bg-light p-3">
          <p>Just Forgot that I had to mention something about someone to someone about how I forgot something,
              but now I forgot it. Ahh, forgot it! Or wait. I remember..... no I don't.</p>
        </div>
        </Col>
      </Row>
      );})
  );
    
};
  
export default Newsfeed;