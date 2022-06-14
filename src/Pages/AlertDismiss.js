import Alert from 'react-bootstrap/Alert'
import { useState } from "react";

function AlertDismiss() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <strong>Ey!</strong> People are looking at your profile. Find out who.
        </Alert>
      );
    }

  }

  export default AlertDismiss;