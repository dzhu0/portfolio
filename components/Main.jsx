import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Container } from "react-bootstrap"

export default function Main() {
    const pathname = useLocation().pathname.slice(1)

    document.title = (pathname && `${captitalize(pathname)} | `) + "Daniel Dev"

    function captitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <main className="my-4">
            <Container className="text-center">
                <Outlet />
            </Container>
        </main>
    )
}
