import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeTopBar = () => {
    return(
        <Navbar bg="dark" variant="dark" className="Topbar">
            <Container>
                <Navbar.Brand>
                    <h4>
                        <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}>Yo Mart</Link>
                    </h4>
                </Navbar.Brand>
                <Link to="/dashboard" style={{textDecoration: "none", color: "white", fontWeight:"600", fontSize: "1.2rem"}}>Admin Panel</Link>
            </Container>
        </Navbar>
    );
}

export default HomeTopBar;