import React from 'react';
import { Container, Card, CardGroup } from 'react-bootstrap';

const HomeFooter = () => {
    return(
        <Container className="HomeFooter">
            <CardGroup>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header>What?</Card.Header>
                    <Card.Body>
                    <Card.Title>Yo Mart</Card.Title>
                    <Card.Text>
                        Sample Description
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Why?</Card.Header>
                    <Card.Body>
                    <Card.Title>Yo Mart</Card.Title>
                    <Card.Text>
                        Sample Description
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Where?</Card.Header>
                    <Card.Body>
                    <Card.Title>Yo Mart</Card.Title>
                    <Card.Text>
                        Sample Description
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    );
}

export default HomeFooter;