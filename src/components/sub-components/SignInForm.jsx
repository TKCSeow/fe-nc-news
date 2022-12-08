import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { Card, Form, Button, ListGroup } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { getUsers } from "../../utils/api";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";

function LoginForm () {
    const [usernameInput, setUsernameInput] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const search = useLocation().search;
    const redirectLink = new URLSearchParams(search).get('redirect');

    function handleSignIn(event) {
        event.preventDefault();

        getUsers().then((users)=>{
            const user = users.find(user => {
                return user.username === usernameInput
            })

            if (user === undefined) {
                return setErrorMessage("User not found!")
            }

            localStorage.setItem('user', JSON.stringify(user))
            setUser(user);
            navigate(validateRedirectLink())
        })
    }

    function validateRedirectLink() {
        return redirectLink !== null ? redirectLink : "/";
    }

    return <Card style={{ minWidth: '18rem', maxWidth: '28rem', }}  className="login-card mx-auto p-3">
        <Container style={{ maxWidth: '24rem' }}>
            <Row>
            <Card.Body>
                <Card.Title className="text-center mb-4 fs-1">Sign In</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Form onSubmit={(event) => {handleSignIn(event)}} className="py-4">
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control required type="text" placeholder="Enter username" value={usernameInput} onChange={(event) => {setUsernameInput(event.target.value)}}/>
                        <p style={{ color:"#b72b2b", fontSize: "1rem", fontWeight:"bold", marginLeft:"0.5rem"}}>
                            {errorMessage}
                        </p>
                    </Form.Group>

                    <Button className="sign-in-button w-100" type="submit">
                        Sign In
                    </Button>
                </Form>
                </Card.Body>
            </Row>
        </Container>         
        <Card.Body>
            <Link to={validateRedirectLink()} className="--link-dark ms-2" style={{ fontSize: '1rem'}}>
                {"< "}return to previous page
            </Link>
        </Card.Body>
   
    </Card>

}

export default LoginForm;