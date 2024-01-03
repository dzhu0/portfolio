import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

export default function Home() {
    return (
        <>
            <h1>Hello, I'm <span className="text-info">Daniel Zhu</span>.</h1>
            <h1>I'm a <span className="text-warning">Full-Stack Web Developer</span>.</h1>

            <Button href="#about" as={Link} to="/about" className="mt-5 btn-lg">
                Learn More
            </Button>
        </>
    )
}
