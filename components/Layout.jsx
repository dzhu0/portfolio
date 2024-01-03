import React from "react"

import { Header, Main, Footer } from "./index"
import { PortfolioContextProvider } from "../PortfolioContext"

export default function Layout() {
    return (
        <PortfolioContextProvider>
            <Header />
            <Main />
            <Footer />
        </PortfolioContextProvider>
    )
}
