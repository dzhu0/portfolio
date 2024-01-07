import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card, Button, ButtonGroup } from "react-bootstrap"

// ProjectCard component representing a card for displaying project information
export default function ProjectCard(props) {
    // Destructuring props to extract relevant project details
    const { name, description, image, repository, demo, last, projectId } = props

    // State to track the window width for responsive layout
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // Effect to add and remove window resize event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    // Function to handle window resize and update the window width state
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    // Checking if the screen is considered small based on window width
    const smallScreen = windowWidth < 505

    // Array of buttons for different actions related to the project
    const buttons = [
        // Previous project button, only displayed if it's not the first project
        (projectId > 1 &&
            <Button as={Link} to={`/portfolio/${projectId - 1}`} variant="secondary" style={{ flex: 1 }} key="prevProject">
                Prev Project
            </Button>),
        // Repository button linking to the project's code repository
        (<Button href={repository} target="_blank" variant="success" style={{ flex: 1 }} key="repository">
            Repository
        </Button>),
        // Live Demo button linking to the live demonstration of the project
        (<Button href={demo} target="_blank" variant="warning" style={{ flex: 1 }} key="liveDemo">
            Live Demo
        </Button>),
        // Either "Let's Talk" button or Next Project button based on whether it's the last project
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
                    {/* ButtonGroup for responsive layout of buttons */}
                    <ButtonGroup vertical={smallScreen} className="d-flex">
                        {/* Reversing the order of buttons for small screens */}
                        {smallScreen ? buttons.reverse() : buttons}
                    </ButtonGroup>
                </Card.Footer>
            </Card>
        </>
    )
}
