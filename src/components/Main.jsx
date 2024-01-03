import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Container } from "react-bootstrap"

import { Home, About, Experience, Portfolio, Contact, NotFound } from "../pages"

export default function Main() {
    const pathname = useLocation().pathname.slice(1)

    document.title = (pathname && `${captitalize(pathname)} | `) + "Daniel Dev"

    function captitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <main className="my-4">
            <Container className="text-center">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="portfolio/:id" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </main>
    )
}
