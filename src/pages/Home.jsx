import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

// Home component representing the content of the home page
export default function Home() {
    return (
        <>
            {/* First heading introducing the user */}
            <h1>Hello, I'm <span className="text-info">Daniel Zhu</span>.</h1>
            {/* Second heading describing the user's role */}
            <h1>I'm a <span className="text-warning">Full-Stack Web Developer</span>.</h1>

            {/* Button to navigate to the about page */}
            <Button href="#about" as={Link} to="/about" className="mt-5 btn-lg">
                Learn More
            </Button>
        </>
    )
}
