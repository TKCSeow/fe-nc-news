import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap';

 function SiteNavbar () {

    return <Navbar className="site-navbar" expand="sm">
        <Container className="--content-width">
            <Navbar.Toggle aria-controls="site-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to="/">
                    <Nav.Link className="site-navbar__link">Home</Nav.Link>
                </LinkContainer>               
                <Nav.Link className="site-navbar__link">Topic 1</Nav.Link>
                <Nav.Link className="site-navbar__link">Topic 2</Nav.Link>
                <Nav.Link className="site-navbar__link">Topic 3</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            
            
        </Container>
        </Navbar>
}

export default SiteNavbar;
