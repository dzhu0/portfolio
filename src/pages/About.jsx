import React from "react"
import { Link } from "react-router-dom"
import { Row, Col, Image, Card, Button } from "react-bootstrap"

// About component representing the content of the about page
export default function About() {
    return (
        <>
            <h1 className="mb-5">About Me</h1>

            {/* Row containing the user's image and information */}
            <Row className="text-start justify-content-center align-items-center gap-4">
                {/* Column for the user's image */}
                <Col xs={8} md={6} lg={4}>
                    <Image src="/images/profile.png" roundedCircle fluid />
                </Col>

                {/* Column for the user's information */}
                <Col md={10} lg={6}>
                    {/* Bootstrap Card component for containing user details */}
                    <Card border="primary">
                        <Card.Header>
                            <Card.Title as="h4" className="text-warning">
                                Who is this guy?
                            </Card.Title>
                        </Card.Header>

                        {/* Card body with user's description */}
                        <Card.Body>
                            <Card.Text>
                                Hello! I'm Daniel Zhu, a full-stack web developer and a proud graduate
                                of Red River College Polytechnic. My days are filled with lines
                                of code and a passion for creating websites that solve real-world
                                problems. As a full-stack enthusiast, I thrive on front-end aesthetics
                                and back-end functionality challenges.
                            </Card.Text>

                            <Card.Text>
                                When I'm not immersed in the digital realm, you'll likely find me
                                captivated by puzzle games, relishing the thrill of cracking codes and
                                solving enigmas.
                            </Card.Text>

                            <Card.Text>
                                I believe in the power of the web to transform ideas into reality, and
                                I'm on a mission to make the internet a better place, one pixel at a time.&nbsp;
                                <Card.Link as={Link} to="/contact">Let's explore the digital world together.</Card.Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Button to navigate to the experience page */}
            <Button as={Link} to="/experience" className="mt-5 btn-lg">
                Check Skills
            </Button>
        </>
    )
}
