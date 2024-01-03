import React, { createContext, useState, useEffect } from "react"

import defaultPortfolio from "/public/getportfolio.json"

const PortfolioContext = createContext([])

const PortfolioContextProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    try {
      const res = await fetch("http://localhost/portfolio/getportfolio.php") // Update
      const data = await res.json()

      if (!data.success) {
        throw new Error(data.error)
      }

      setPortfolio(data.portfolio)
    } catch (error) {
      console.error(error)

      const res = await fetch("/public/getportfolio.json")
      const data = await res.json()

      setPortfolio(data.portfolio)
    }
  }

  return <PortfolioContext.Provider value={portfolio}>{children}</PortfolioContext.Provider>
}

export { PortfolioContext, PortfolioContextProvider }
