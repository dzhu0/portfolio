import React from "react"
import { Container, Row, Col } from "react-bootstrap"

// Importing FontAwesomeIcon component and brand icons from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

// Footer component representing the bottom section of the application
export default function Footer() {
    return (
        <footer className="text-center py-4 bg-primary">
            {/* Container to hold the content with responsive margins */}
            <Container>
                {/* Row for social media icons */}
                <Row>
                    <Col>
                        {/* GitHub icon with a link to the GitHub profile */}
                        <a href="https://github.com/dzhu0" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        {/* LinkedIn icon with a link to the LinkedIn profile */}
                        <a href="https://www.linkedin.com/in/dzhu0/" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </Col>
                </Row>
                {/* Row for contact information and copyright */}
                <Row>
                    <Col className="mt-2">
                        {/* Email link */}
                        Email: <a href="mailto:nielzhu@gmail.com" className="text-light">nielzhu@gmail.com</a>
                        {/* Copyright information */}
                        <p>© 2023 Daniel Zhu. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
