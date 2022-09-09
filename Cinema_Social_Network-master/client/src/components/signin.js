import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Axios from 'axios'
import "./styles.css";

import { Link } from 'react-router-dom';
export default function SignIn() {

    const[password, setpassword] = useState("");
    const[emailid, setemailid] = useState("");


    const signin = () => {
        console.log("login")
        Axios.post("http://localhost:3001/signin", {
            emailid: emailid,
            password: password,
        }).then((response) => {
            console.log(response);
        });
    }

    function validateForm() {
        return emailid.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="sign">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={emailid}
                        onChange={(e) => setemailid(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={signin} class="btn btn-primary btn-block" block size="lg" type="submit" >
                    sign in
                </Button>

                <p className="forgot-password text-right">
                    Not registered <Link to={'/signup'}>sign up?</Link>
                </p>
            </Form>
        </div>
    );
}

