import React, { useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { Row, Col } from "react-bootstrap"

import { ProjectCard, ProjectCardPlaceholder } from "../components"
import { PortfolioContext } from "../PortfolioContext"

export default function Portfolio() {
    const projectId = parseInt(useParams().id)
    const portfolio = useContext(PortfolioContext)

    return (
        <>
            <h1 className="mb-5">My Portfolio</h1>

            <Row className="justify-content-center">
                <Col md={9} lg={7} xl={6}>
                    {
                        portfolio.length ?
                            <ProjectCard
                                {...portfolio[projectId - 1]}
                                last={projectId === portfolio.length}
                                projectId={projectId}
                            /> :
                            <ProjectCardPlaceholder />
                    }
                </Col>
            </Row>
        </>
    )
}
