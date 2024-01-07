import React, { createContext, useState, useEffect } from "react"

// Create a context to manage and share portfolio data
const PortfolioContext = createContext([])

// Create a provider component that will wrap around the application to provide the portfolio data
const PortfolioContextProvider = ({ children }) => {
    // State to store the portfolio data
    const [portfolio, setPortfolio] = useState([])

    // Fetch portfolio data from the server when the component mounts
    useEffect(() => {
        getPortfolio()
    }, [])

    // Function to fetch portfolio data from the server
    const getPortfolio = async () => {
        try {
            // Attempt to fetch portfolio data from the server
            const res = await fetch("https://dzhu0.000webhostapp.com/getportfolio.php")
            const data = await res.json()

            // Check if the server request was successful
            if (!data.success) {
                // If not successful, throw an error with the server response
                throw new Error(data.error)
            }

            // Set the portfolio data in the state
            setPortfolio(data.portfolio)
        } catch (error) {
            // If an error occurs during the server request, log the error and fetch local data as a fallback
            console.error(error)

            const res = await fetch("/getportfolio.json")
            const data = await res.json()

            // Set the local data as the portfolio data in the state
            setPortfolio(data.portfolio)
        }
    }

    // Provide the portfolio state to the components through the context
    return <PortfolioContext.Provider value={portfolio}>{children}</PortfolioContext.Provider>
}

// Export the portfolio context and provider for use in other components
export { PortfolioContext, PortfolioContextProvider }
