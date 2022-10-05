import { useState } from 'react';
import { Navbar, Container, Nav, Button, Modal, Form } from 'react-bootstrap';
import LogoSrc from '../Assets/Images/logo.png';

const Navbard = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar fixed="top" bg="dark" expand="lg" variant="dark" className="py-0">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={LogoSrc} alt="Website Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Tickets&offers</Nav.Link>
              <Nav.Link href="#things">Things to do</Nav.Link>
              <Nav.Link href="#Accomodation">Accommodation</Nav.Link>
              <Nav.Link href="#information">Traveller information</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="me-auto">
            <Button size="sm" variant="warning" onClick={handleShow}>
              Book it!
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className=" bg-warning" closeButton>
          <Modal.Title>Book Your Holiday</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label aria-describedby="full-name">Full-name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label aria-describedby="email">Email</Form.Label>
              <Form.Control type="email" placeholder="email@email.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTex1">
              <Form.Text>We will never share your email with anyone!</Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlSelect1"
              aria-label="select-menu"
            >
              <Form.Select>
                <option selected>Select your holiday package</option>
                <option value="h1">Packet-1</option>
                <option value="h2">Packet-2</option>
                <option value="h3">Packet-3</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlSelect1"
              aria-label="checkbox-menu"
            >
              <Form.Check
                type="checkbox"
                label="I agree with the terms and conditions"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleClose}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbard;
