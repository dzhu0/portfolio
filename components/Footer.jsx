import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer className="text-center py-4 bg-primary">
            <Container>
                <Row>
                    <Col>
                        <a href="https://github.com/dzhu0" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/dzhu0/" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-2">
                        Email: <a href="mailto:nielzhu@gmail.com" className="text-light">nielzhu@gmail.com</a>
                        <p>© 2023 Daniel Zhu. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
