import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Form, FloatingLabel, Button, Spinner, Modal } from "react-bootstrap"

// Contact component representing the content of the contact page
export default function Contact() {
    // State variables for managing modal visibility, form submission status, error message, and form data
    const [show, setShow] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    // Event handler for input changes in the form
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    // Event handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmit(true)

        try {
            // Sending form data to the server for processing
            const res = await fetch("https://dzhu0.000webhostapp.com/postmessage.php", {
                method: "POST",
                body: JSON.stringify(formData)
            })

            // Parsing response data
            const data = await res.json()

            // Displaying modal
            setShow(true)

            // Handling server response
            if (!data.success) {
                setErrorMessage(data.error)
                throw new Error(data.error)
            }
        } catch (error) {
            console.error(error)
            // Displaying modal with error message
            setShow(true)
            setErrorMessage(error.message)
        }

        setIsSubmit(false)
    }

    // Event handler for closing the modal
    const handleClose = () => {
        // Clearing form data if no error occurred
        !errorMessage && setFormData({
            name: "",
            email: "",
            message: "",
        })

        setErrorMessage("")
        setShow(false)
    }

    return (
        <>
            <h1>Contact Me</h1>
            <h5 className="text-warning mb-5">Have a question or want to work together?</h5>

            {/* Form for user to enter contact information */}
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col md="6" className="mx-auto">
                        {/* FloatingLabel for name input */}
                        <FloatingLabel
                            controlId="name"
                            label="Enter your name"
                        >
                            {/* Form control for entering name */}
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={isSubmit}
                                required
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md="6" className="mx-auto">
                        {/* FloatingLabel for email input */}
                        <FloatingLabel
                            controlId="email"
                            label="Enter your email"
                        >
                            {/* Form control for entering email */}
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmit}
                                required
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md="6" className="mx-auto">
                        {/* FloatingLabel for message input */}
                        <FloatingLabel
                            controlId="message"
                            label="Enter your message"
                        >
                            {/* Form control for entering message */}
                            <Form.Control
                                as="textarea"
                                placeholder="Enter your message"
                                style={{ height: "200px" }}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                disabled={isSubmit}
                                required
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                {/* Button for submitting the form */}
                <Button type="submit" className={isSubmit ? "btn-lg d-inline-flex align-items-center gap-2" : "btn-lg"} disabled={isSubmit}>
                    {
                        // Displaying spinner and "Sending..." text during form submission
                        isSubmit ?
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                Sending...
                            </> :
                            "Send Message"
                    }
                </Button>
            </Form>

            {/* Modal for displaying success or error message */}
            <Modal show={show} onHide={handleClose} className={errorMessage ? "text-danger" : "text-success"} centered>
                <Modal.Header closeButton>
                    {/* Modal title based on success or error */}
                    <Modal.Title>{errorMessage ? "Error!" : "Success!"}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {
                        // Displaying appropriate content based on success or error
                        errorMessage ?
                            <>
                                <p>{errorMessage}</p>
                                <p>Please check and try again.</p>
                            </> :
                            <>
                                <p>Your message has been successfully sent.</p>
                                <p>Thank you for reaching out to me.</p>
                            </>
                    }
                </Modal.Body>

                <Modal.Footer>
                    {/* Button for closing the modal */}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    {
                        // Displaying "Back to Home" button only if no error occurred
                        !errorMessage &&
                        <Button as={Link} to="/">
                            Back to Home
                        </Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}
