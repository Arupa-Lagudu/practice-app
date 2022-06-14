import { Card, Container } from "react-bootstrap";
import paris from "./Images/paris.jpg";


const Adds = () =>{
 return(
  <Container className="text-center border border-2 border-ligh rounded bg-light d-grid gap-3 p-3 mt-4">
    <Card className="text-center border border-2 border-ligh rounded p-2">
      <Card.Text>Upcoming Events:</Card.Text>
      <Card.Img src={paris} alt='Paris'/>
      <Card.Body>
          <Card.Title>Paris</Card.Title>
        <Card.Text>Fri. 27 May 2022</Card.Text>
        <a href="/" class="btn bg-primary text-white">Info</a>
      </Card.Body>
    </Card>

    <div class="p-3 border border-2 rounded bg-light">
      <p>ADS</p>
    </div>

    <div class="p-3 border border-2 rounded bg-light mb-4">
      <p>ADS</p>
    </div>

  </Container>
 );
};

export default Adds;