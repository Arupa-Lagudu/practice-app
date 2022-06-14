import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const Feedback = () =>{
  return(
       <Card className="mt-4 border border-2 border-ligh rounded p-2">
          <Card.Body>
          <Card.Text>Status: Feeling blue</Card.Text>
          <a href="/" className="text-dark text-decoration-none"><FontAwesomeIcon icon={faThumbsUp} /> Like</a>
          </Card.Body>
      </Card>
  );

};

export default Feedback;