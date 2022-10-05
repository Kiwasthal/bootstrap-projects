import { useState } from 'react';
import { Navbar, Container, Nav, Button, Modal } from 'react-bootstrap';
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
        <Modal.Body>Take care of your bookings!</Modal.Body>
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
