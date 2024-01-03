import React from "react"
import { Card, ButtonGroup, Placeholder } from "react-bootstrap"

export default function ProjectCardPlaceholder() {
    return (
        <>
            <Card>
                <Placeholder animation="glow">
                    <Placeholder as={Card.Img} style={{ height: "20rem" }} variant="top" />
                </Placeholder>

                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={7} />
                    </Placeholder>

                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} />
                    </Placeholder>
                </Card.Body>

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
