import { Outlet, Link, } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
  return (
    <>
    <Navbar fixed="top" bg="dark" variant="dark" expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" /*activeKey={location.pathname}*/>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Messages">Messages</Nav.Link>
            <Nav.Link as={Link} to="/Products">Products</Nav.Link>
          </Nav>
          <Nav>
          <Form.Label className= "text-secondary me-4 mt-2" >
            <FontAwesomeIcon className="me-2" icon={faUser} />My Account</Form.Label>
          <Form className="d-flex">
              <FormControl
              type="search"
              placeholder="Search.."
              className="me-1"
              aria-label="Search"
            />
          <Button variant="secondary"><FontAwesomeIcon icon={faSearch} /></Button>
        </Form>
        </Nav>
       </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  )
};

export default Layout;