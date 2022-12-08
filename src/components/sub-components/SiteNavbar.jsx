import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap';
import { useEffect, useState } from 'react';
import { getTopics } from '../../utils/api';
import { Link } from 'react-router-dom';
import { useScreenSize } from '../../custom-hooks/useScreenSize';
import { NavDropdown } from 'react-bootstrap';

 function SiteNavbar () {
    const [topics, setTopics] = useState([]);
    const isSmallScreen = useScreenSize().isSmallScreen;

    useEffect(()=> {
        getTopics().then(topicsData => {
            setTopics(topicsData);
            console.log(topicsData)
        })
    },[])

    function toggleTopicsDropdown() {
        if (isSmallScreen) {
            return 
        }


        return 
    }

    return <Navbar className="site-navbar g-0" style={{marginBottom:"0 !important"}}>
        <Container className="--content-width">
            <Nav className="me-auto">

                <Link to="/"className="site-navbar__link">Home</Link>
              
                {isSmallScreen ? 
                    <NavDropdown title="Topics" id="topics-nav-dropdown">
                        {topics.map((topic) => {
                            return <LinkContainer  key={topic.slug} to={{pathname:`/articles`, search:`topic=${topic.slug}`}} className="text-capitalize">
                                <NavDropdown.Item>{topic.slug}</NavDropdown.Item>
                            </LinkContainer>
                        })}
                    </NavDropdown>
                    : topics.map((topic) => {
                        return <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}className="site-navbar__link text-capitalize"><span>{topic.slug}</span></Link>
                    })
                }
            </Nav>
            
            
        </Container>
        </Navbar>
}

export default SiteNavbar;
