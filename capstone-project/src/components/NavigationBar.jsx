import './NavigationBarStyle.css';
import { Link, } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar() {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">Little Lemon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/booking">Book a table</Nav.Link>
                            <Nav.Link as={Link} to="/about-us">About us</Nav.Link>
                            <Nav.Link as={Link} to="/contact-us">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}