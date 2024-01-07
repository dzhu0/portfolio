import React, { useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { Row, Col } from "react-bootstrap"

// Importing ProjectCard and ProjectCardPlaceholder components
import { ProjectCard, ProjectCardPlaceholder } from "../components"
// Importing PortfolioContext for accessing portfolio data
import { PortfolioContext } from "../PortfolioContext"

// Portfolio component representing the content of the portfolio page
export default function Portfolio() {
    // Extracting project id from the route parameters
    const projectId = parseInt(useParams().id)
    // Accessing the portfolio data from the context
    const portfolio = useContext(PortfolioContext)

    return (
        <>
            <h1 className="mb-5">My Portfolio</h1>

            {/* Row containing a column for displaying project details */}
            <Row className="justify-content-center">
                <Col md={9} lg={7} xl={6}>
                    {
                        // Checking if portfolio data is available
                        portfolio.length ?
                            // Displaying ProjectCard with project details
                            <ProjectCard
                                {...portfolio[projectId - 1]}
                                last={projectId === portfolio.length}
                                projectId={projectId}
                            /> :
                            // Displaying ProjectCardPlaceholder if portfolio data is not available
                            <ProjectCardPlaceholder />
                    }
                </Col>
            </Row>
        </>
    )
}
