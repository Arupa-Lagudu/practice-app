import { Card, Container, Image } from "react-bootstrap";
import AlertDismiss from "./AlertDismiss";
import profile from "./Images/profile.jpg";
import { Nav } from 'react-bootstrap';

const Profile = () =>{
  return(  
  <Container fluid className="text-center border border-2 border-ligh rounded bg-light d-grid gap-3 p-3 mt-4">
    <Card className="text-center border border-2 border-ligh rounded bg-light p-2">
      <Card.Body>
      <a href="/" className="text-dark text-decoration-none">My Profile<br />
      <Image fluid src= {profile} width={100} height={100} alt='Avatar' />
      </a>
      </Card.Body>
    </Card>

    <Card className="text-center border border-2 bg-light p-3">
      <Card.Title>Interests</Card.Title>
        <Card.Body>
          <a href="/" className="me-1"><span class="badge bg-secondary">News</span></a>
          <a href="/" className="me-1"><span class="badge bg-primary">W3schools</span></a>
          <a href="/" className="me-1"><span class="badge bg-success">labels</span></a>
          <a href="/" className="me-1"><span class="badge bg-info">Football</span></a>
          <a href="/" className="me-1"><span class="badge bg-warning">Gaming</span></a>
          <a href="/" className="me-1"><span class="badge bg-danger">Friends</span></a>
        </Card.Body>
    </Card>
    
    <AlertDismiss />
    
    <Nav.Link href="/">Link</Nav.Link>
    <Nav.Link href="/">Link</Nav.Link>
    <Nav.Link href="/">Link</Nav.Link>

  </Container>
  );

};

export default Profile;