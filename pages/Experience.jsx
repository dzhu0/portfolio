import React from "react"
import { Link } from "react-router-dom"
import { Row, Col, Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJs, faReact, faBootstrap, faHtml5, faCss3, faPhp, faPython, faNodeJs, faNpm, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faScrewdriverWrench, faDatabase, faListCheck, faServer } from "@fortawesome/free-solid-svg-icons"

export default function Experience() {
    return (
        <>
            <h1 className="mb-5">My Experience</h1>

            <Row className="text-start justify-content-center g-4">
                <Col lg={5} sm={6} xs={9}>
                    <Card border="primary" className="h-100">
                        <Card.Header>
                            <Card.Title as="h4" className="text-warning">
                                Front-End Development
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Row className="g-4">
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faJs} size="2x" />
                                    JavaScript
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faReact} size="2x" />
                                    React
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faJs} size="2x" />
                                    AJAX
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faBootstrap} size="2x" />
                                    Bootstrap
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faHtml5} size="2x" />
                                    HTML
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faCss3} size="2x" />
                                    CSS
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={5} sm={6} xs={9}>
                    <Card border="primary" className="h-100">
                        <Card.Header>
                            <Card.Title as="h4" className="text-warning">
                                Back-End Development
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Row className="g-4">
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faPhp} size="2x" />
                                    PHP
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faDatabase} size="2x" />
                                    MySQL
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faPython} size="2x" />
                                    Python
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faDatabase} size="2x" />
                                    PhpMyAdmin
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="text-start justify-content-center mt-0 g-4">
                <Col lg={5} sm={6} xs={9}>
                    <Card border="primary" className="h-100">
                        <Card.Header>
                            <Card.Title as="h4" className="text-warning">
                                Tools
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Row className="g-4">
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faScrewdriverWrench} size="2x" />
                                    XAMPP
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faListCheck} size="2x" />
                                    Composer
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faNodeJs} size="2x" />
                                    NVM
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faNpm} size="2x" />
                                    NPM
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={5} sm={6} xs={9}>
                    <Card border="primary" className="h-100">
                        <Card.Header>
                            <Card.Title as="h4" className="text-warning">
                                Version Control & Deployment
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Row className="g-4">
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                    GitHub
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faServer} size="2x" />
                                    Netlify
                                </Col>
                                <Col lg={6} className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faServer} size="2x" />
                                    InfinityFree
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Button as={Link} to="/portfolio/1" className="mt-5 btn-lg">
                View Portfolio
            </Button>
        </>
    )
}
