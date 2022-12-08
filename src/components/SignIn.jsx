import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import SignInForm from "./sub-components/SignInForm";

function Login () {

    return <main className="--site-bg-primary d-flex justify-content-center vh-100 align-items-center">
        <Container style={{ maxWidth: '720px' }}>
            <Row>
                <Col sm={6} className="my-auto">
                    <Link to="/">
                        <h1 className="text-center --text-light">NC News</h1>     
                    </Link>                 
                </Col>
                <Col sm={6} className="my-3">
                    <SignInForm/>          
                </Col>
            </Row>
        </Container>
    </main>

}

export default Login;