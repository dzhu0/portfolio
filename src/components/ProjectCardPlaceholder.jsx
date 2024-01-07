import React from "react"
import { Card, ButtonGroup, Placeholder } from "react-bootstrap"

// ProjectCardPlaceholder component representing a placeholder for loading project details
export default function ProjectCardPlaceholder() {
    return (
        <>
            <Card>
                {/* Placeholder for the project image with a glowing animation */}
                <Placeholder animation="glow">
                    <Placeholder as={Card.Img} style={{ height: "20rem" }} variant="top" />
                </Placeholder>

                {/* Placeholder for the card body with glowing animations */}
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={7} />
                    </Placeholder>

                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} />
                    </Placeholder>
                </Card.Body>

                {/* Placeholder for the card footer with glowing animations */}
                <Card.Footer>
                    <Placeholder as={ButtonGroup} animation="glow" xs={12} sm={8}>
                        <Placeholder.Button variant="success" />
                        <Placeholder.Button variant="warning" />
                        <Placeholder.Button variant="primary" />
                    </Placeholder>
                </Card.Footer>
            </Card>
        </>
    )
}
