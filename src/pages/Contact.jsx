import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Form, FloatingLabel, Button, Spinner, Modal } from "react-bootstrap"

export default function Contact() {
    const [show, setShow] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmit(true)

        try {
            const res = await fetch("http://localhost/portfolio/postmessage.php", { // Update
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json()

            setShow(true)

            if (!data.success) {
                setErrorMessage(data.error)
                throw new Error(data.error)
            }
        } catch (error) {
            console.error(error)
            setShow(true)
            setErrorMessage(error.message)
        }

        setIsSubmit(false)
    }

    const handleClose = () => {
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

            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col md="6" className="mx-auto">
                        <FloatingLabel
                            controlId="name"
                            label="Enter your name"
                        >
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
                        <FloatingLabel
                            controlId="email"
                            label="Enter your email"
                        >
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
                        <FloatingLabel
                            controlId="message"
                            label="Enter your message"
                        >
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

                <Button type="submit" className={isSubmit ? "btn-lg d-inline-flex align-items-center gap-2" : "btn-lg"} disabled={isSubmit}>
                    {
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

            <Modal show={show} onHide={handleClose} className={errorMessage ? "text-danger" : "text-success"} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{errorMessage ? "Error!" : "Success!"}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    {
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
