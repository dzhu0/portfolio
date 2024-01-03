import React, { useState, useEffect, useContext } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import { Container, Navbar, Nav, NavDropdown, Spinner } from "react-bootstrap"

import { PortfolioContext } from "../PortfolioContext"

export default function Header() {
    const [show, setShow] = useState(false)
    const portfolio = useContext(PortfolioContext)

    useEffect(() => {
        setShow(false)
    }, [useLocation().pathname])

    const handleToggle = () => {
        setShow(!show)
    }

    const isPortfolioActive = useLocation().pathname.includes("/portfolio/") ? "active" : "";
    const portfolioNavLink = portfolio.map((project, id) =>
        <NavDropdown.Item as={NavLink} to={`/portfolio/${id + 1}`} key={id + 1}>
            {project.name}
        </NavDropdown.Item>
    )

    return (
        <header className="bg-primary fw-bold sticky-top">
            <Container>
                <Navbar expand="lg" expanded={show}>
                    <Navbar.Brand as={Link} to="/" className="text-warning">Daniel Dev</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
                    <Navbar.Collapse id="responsive-navbar-nav">
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
                            <NavDropdown title="Portfolio" className={`active-link ${isPortfolioActive}`}>
                                {
                                    portfolioNavLink.length ?
                                        portfolioNavLink :
                                        <NavDropdown.Item>
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
