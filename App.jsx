import React from "react"
import { BrowserRouter } from "react-router-dom"

import { Header, Main, Footer } from "./components"

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    )
}
