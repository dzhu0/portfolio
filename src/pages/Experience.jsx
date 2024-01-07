import React from "react"
import { Link } from "react-router-dom"
import { Row, Col, Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Importing skill data from external file
import { frontEndSkills, backEndSkills, toolsSkills, otherSkills } from "../skills"

// Experience component representing the content of the experience page
export default function Experience() {
    // Function to generate skill columns based on skill data
    const generateSkillCols = skills => skills.map((skill, index) => (
        <Col key={index} lg={6} className="d-flex align-items-center gap-2">
            <FontAwesomeIcon icon={skill.icon} size="2x" />
            {skill.name}
        </Col>
    ))

    return (
        <>
            <h1 className="mb-5">My Experience</h1>

            {/* Row containing front-end and back-end development skills */}
            <Row className="text-start justify-content-center g-4">
                {/* Column for front-end development skills */}
                <Col lg={5} sm={6} xs={9}>
                    <Card border="primary" className="h-100">
                        <Card.Header>
                            <Card.Title as="h4" className="text-warning">
                                Front-End Development
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Row className="g-4">{generateSkillCols(frontEndSkills)}</Row>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Column for back-end development skills */}
                <Col lg={5} sm={6} xs={9}>
                    <Card border="primary" className="h-100">
                        <Card.Header>
                            <Card.Title as="h4" className="text-warning">
                                Back-End Development
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Row className="g-4">{generateSkillCols(backEndSkills)}</Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Row containing tools and version control & deployment skills */}
            <Row className="text-start justify-content-center mt-0 g-4">
                {/* Column for tools skills */}
                <Col lg={5} sm={6} xs={9}>
                    <Card border="primary" className="h-100">
                        <Card.Header>
                            <Card.Title as="h4" className="text-warning">
                                Tools
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Row className="g-4">{generateSkillCols(toolsSkills)}</Row>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Column for version control & deployment skills */}
                <Col lg={5} sm={6} xs={9}>
                    <Card border="primary" className="h-100">
                        <Card.Header>
                            <Card.Title as="h4" className="text-warning">
                                Version Control & Deployment
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Row className="g-4">{generateSkillCols(otherSkills)}</Row>
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
