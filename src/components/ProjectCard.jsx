import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card, Button, ButtonGroup } from "react-bootstrap"

export default function ProjectCard(props) {
    const { name, description, image, repository, demo, last, projectId } = props
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    const smallScreen = windowWidth < 505

    const buttons = [
        (projectId > 1 &&
            <Button as={Link} to={`/portfolio/${projectId - 1}`} variant="secondary" style={{ flex: 1 }} key="prevProject">
                Prev Project
            </Button>),
        (<Button href={repository} target="_blank" variant="success" style={{ flex: 1 }} key="repository">
            Repository
        </Button>),
        (<Button href={demo} target="_blank" variant="warning" style={{ flex: 1 }} key="liveDemo">
            Live Demo
        </Button>),
        (last ?
            <Button as={Link} to="/contact" style={{ flex: 1 }} key="contact">
                Let's Talk
            </Button> :
            <Button as={Link} to={`/portfolio/${projectId + 1}`} style={{ flex: 1 }} key="nextProject">
                Next Project
            </Button>)
    ]

    return (
        <>
            <Card>
                <Card.Img src={image} style={{ height: "20rem" }} className="object-fit-cover" variant="top" />

                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>

                <Card.Footer>
                    <ButtonGroup vertical={smallScreen} className="d-flex">
                        {smallScreen ? buttons.reverse() : buttons}
                    </ButtonGroup>
                </Card.Footer>
            </Card>
        </>
    )
}
