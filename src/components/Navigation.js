import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
import { FaGlassCheers} from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






function Navigation() {
    return (
        <Container>
        <Row>
        <Col>
        
            <Navbar fixed='top'  expand="xl" bg="light" variant="light" className="shadow-lg  bg-white rounded">
                <LinkContainer to="/">
                    
                    <Navbar.Brand>Home Icon <FaGlassCheers></FaGlassCheers></Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                        <LinkContainer to="/form">
                            <Nav.Link>Form</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/list">
                            <Nav.Link>List</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    {/* <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
                </Nav> */}
                </Navbar.Collapse>
            </Navbar>
            </Col>
            </Row>
            <Row>
            <Col>
     <br></br>
     <br></br>           
     </Col>
            </Row>
            </Container>
        

    );
}


export default Navigation;
