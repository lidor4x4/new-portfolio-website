import React, { useState } from "react";
import { motion } from "framer-motion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import "./css/ContactMe.css";

export default function ContactMe() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [characters, setCharacters] = useState(0);
  const sendEmail = (e) => {
    e.preventDefault();
    const emailPerms = {
      email,
      subject,
      body,
    };
    emailjs
      .send(
        "service_dip5d0d",
        "template_n909tcw",
        emailPerms,
        "ZfLlsj6U4Ni4sIYfD"
      )
      .then(
        () => {
          window.location.href = "/contact/email-sent";
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const emailBodyChange = (e) => {
    setBody(e.target.value);
    setCharacters(e.target.value.length);
  };

  return (
    <div className="contact-me-conatiner">
      <div className="contact-me-form-card">
        <h1 className="contact-me-title">Contact Me</h1>
        <hr className="contact-me-hr" />
        <Form onSubmit={sendEmail} className="contact-me-form">
          <div className="contact-me-form-input-container">
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="contact-me-form-email-input"
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email-subject">
              <Form.Label>subject</Form.Label>
              <Form.Control
                className="contact-me-form-subject-input"
                type="text"
                placeholder="I need a website"
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email-body">
              <Form.Label>Body</Form.Label>

              <Form.Control
                onChange={emailBodyChange}
                as="textarea"
                rows={8}
                cols={50}
                maxLength={320}
              />
              <p className="contact-me-max-characters-display">
                {characters}/320
              </p>
            </Form.Group>
            <div className="send-email-button-container">
              <motion.button
                className="send-email-button"
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Send Email
              </motion.button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
