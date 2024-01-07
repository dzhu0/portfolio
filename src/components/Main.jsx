import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Container } from "react-bootstrap"

// Importing custom page components
import { Home, About, Experience, Portfolio, Contact, NotFound } from "../pages"

// Main component representing the main content section of the application
export default function Main() {
    // Extracting the pathname from the current location
    const pathname = useLocation().pathname.slice(1)

    // Setting the document title based on the current page
    document.title = (pathname && `${capitalize(pathname)} | `) + "Daniel Dev"

    // Function to capitalize the first letter of a string
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <main className="my-4">
            {/* Container to hold the content with responsive margins */}
            <Container className="text-center">
                {/* React Router's Routes component for managing page routing */}
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
