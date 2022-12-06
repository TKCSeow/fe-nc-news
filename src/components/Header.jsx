import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SiteNavbar from "./sub-components/SiteNavbar";

function Header () {

    return <header className="site-header">
        <Container className="--content-width">
            <Row>
                <Col>
                    <h1>NC News</h1>
                </Col>
            </Row>
            <Row>
                <SiteNavbar />
            </Row>
        </Container>
    </header>

}

export default Header;
