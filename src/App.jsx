import React from "react"
import { BrowserRouter } from "react-router-dom"

// Importing custom components and context provider
import { Header, Main, Footer } from "./components"
import { PortfolioContextProvider } from "./PortfolioContext"

// App component that serves as the root component of the application
export default function App() {
    return (
        <BrowserRouter>
            {/* Providing portfolio context to components using the PortfolioContextProvider */}
            <PortfolioContextProvider>
                <Header />
                <Main />
                <Footer />
            </PortfolioContextProvider>
        </BrowserRouter>
    )
}
