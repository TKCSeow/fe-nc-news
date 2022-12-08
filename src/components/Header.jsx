import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SiteNavbar from "./sub-components/SiteNavbar";
import { SignInState } from '../components/sub-components/SignInState';

function Header () {
    return <header className="site-header">
        <Container className="--content-width">
            <Row>
                <Col xs={8}>
                    <a href="/" className="site-header__link">
                        <h1 className="--brand-logo">NC News</h1>
                    </a>                 
                </Col>
                <Col xs={4}>
                     <SignInState/> 
                </Col>
            </Row>
            <Row>
               
                    <SiteNavbar />
                
                
            </Row>
        </Container>
    </header>

}

export default Header;
