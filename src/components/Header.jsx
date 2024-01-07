import React, { useState, useEffect, useContext } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import { Container, Navbar, Nav, NavDropdown, Spinner } from "react-bootstrap"

// Importing PortfolioContext to access portfolio data
import { PortfolioContext } from "../PortfolioContext"

// Header component representing the top section of the application
export default function Header() {
    // State to control the visibility of the mobile navigation menu
    const [show, setShow] = useState(false)

    // Accessing portfolio data from the context
    const portfolio = useContext(PortfolioContext)

    // Handling the closing of the mobile navigation menu when the route changes
    useEffect(() => {
        setShow(false)
    }, [useLocation().pathname])

    // Function to toggle the visibility of the mobile navigation menu
    const handleToggle = () => {
        setShow(!show)
    }

    // Checking if the current route is related to the portfolio and applying "active" class accordingly
    const isPortfolioActive = useLocation().pathname.includes("/portfolio/") ? "active" : ""

    // Creating navigation links for each project in the portfolio
    const portfolioNavLink = portfolio.map((project, id) =>
        <NavDropdown.Item as={NavLink} to={`/portfolio/${id + 1}`} key={id + 1}>
            {project.name}
        </NavDropdown.Item>
    )

    return (
        <header className="bg-primary fw-bold sticky-top">
            {/* Container to hold the content with responsive margins */}
            <Container>
                <Navbar expand="lg" expanded={show}>
                    {/* Brand link to navigate to the home page */}
                    <Navbar.Brand as={Link} to="/" className="text-warning">Daniel Dev</Navbar.Brand>

                    {/* Toggle button for mobile navigation menu */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
                    {/* Navbar content */}
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* Navigation links */}
                        <Nav>
                            <Nav.Link as={NavLink} to="/" className="active-link">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className="active-link">
                                About
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/experience" className="active-link">
                                Experience
                            </Nav.Link>
                            {/* Dropdown menu for portfolio projects */}
                            <NavDropdown title="Portfolio" className={`active-link ${isPortfolioActive}`}>
                                {/* Displaying portfolio links or a spinner if the data is still loading */}
                                {
                                    portfolioNavLink.length ?
                                        portfolioNavLink :
                                        <NavDropdown.Item>
                                            {/* Loading spinner */}
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                        </NavDropdown.Item>
                                }
                            </NavDropdown>
                            <Nav.Link as={NavLink} to="/contact" className="active-link">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header >
    )
}
