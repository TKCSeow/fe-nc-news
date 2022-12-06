import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import SiteNavbar from "./sub-components/SiteNavbar";

function Header () {

    return <header className="site-header">
        <Container className="--content-width">
            <Row>
                <Col>
                    <Link to="/" className="site-header__link">
                        <h1>NC News</h1>
                    </Link>                 
                </Col>
            </Row>
            <Row>
                <SiteNavbar />
            </Row>
        </Container>
    </header>

}

export default Header;
