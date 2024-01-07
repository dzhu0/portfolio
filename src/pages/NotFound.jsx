import React from "react"
import { Link } from "react-router-dom"
import { Card, Button, Row, Col } from "react-bootstrap"

// NotFound component representing the content of the 404 Not Found page
export default function NotFound() {
    return (
        <>
            <Row className="text-start justify-content-center">
                <Col xs="auto">
                    <Card bg="danger">
                        <Card.Header as="h2">404 - Page Not Found</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                The requested page does not exist.
                            </Card.Text>
                            {/* Button for navigating back to the Home page */}
                            <Button as={Link} to="/" variant="secondary">
                                Back to Home
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
