import React from "react"
import { BrowserRouter } from "react-router-dom"

import { Header, Main, Footer } from "./components"
import { PortfolioContextProvider } from "./PortfolioContext"

export default function App() {
    return (
        <BrowserRouter>
            <PortfolioContextProvider>
                <Header />
                <Main />
                <Footer />
            </PortfolioContextProvider>
        </BrowserRouter>
    )
}
