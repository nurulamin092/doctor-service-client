import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={CustomLink} to="/">
                        {/* <img height={40} width={50} src={logo} alt="" /> */}
                    </Navbar.Brand>
                    <Navbar.Brand as={CustomLink} to="/home">Home</Navbar.Brand>
                    <Navbar.Brand as={CustomLink} to="/services">Services</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={CustomLink} to="/blogs ">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={CustomLink} to="/register">Register</Nav.Link>
                            {
                                user ? <Button onClick={handleSignOut}>SignOut</Button> : <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>

    );
};

export default Header;