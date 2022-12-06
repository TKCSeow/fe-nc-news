import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

 function SiteNavbar () {

    return <Navbar className="site-navbar">
        <Container className="--content-width">
            <Navbar.Toggle aria-controls="site-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className="site-navbar__link">Home</Nav.Link>
                <div className="m-auto">|</div>
                <Nav.Link className="site-navbar__link">Topic 1</Nav.Link>
                <div className="m-auto">|</div>
                <Nav.Link className="site-navbar__link">Topic 2</Nav.Link>
                <div className="m-auto">|</div>
                <Nav.Link className="site-navbar__link">Topic 3</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
}

export default SiteNavbar;
