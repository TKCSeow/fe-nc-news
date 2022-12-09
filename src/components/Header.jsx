import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SiteNavbar from "./sub-components/SiteNavbar";
import { SignInState } from '../components/sub-components/SignInState';
import SearchBarHeader from "./sub-components/SeachbarHeader";

function Header () {
    return <header className="site-header">
        <Container className="--content-width">
            <Row>
                <Col xs={6}>
                    <a href="/" className="site-header__link">
                        <h1 className="--brand-logo">NC News</h1>
                    </a>                 
                </Col>
                <Col xs={6}>
                      <SearchBarHeader/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SiteNavbar />
                </Col>
                <Col>
                    <SignInState/>
                </Col>
                    
                
                
            </Row>
        </Container>
    </header>

}

export default Header;
