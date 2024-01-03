import React from "react"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

import { Layout } from "./components"
import { Home, About, Experience, Portfolio, Contact, NotFound } from "./pages"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="portfolio/:id" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
