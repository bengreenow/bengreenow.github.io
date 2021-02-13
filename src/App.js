import "./App.scss";

import React from "react";
import { Card, Container, Jumbotron } from "react-bootstrap";

export default function App() {
    return (
        <Container fluid="lg">
            <Jumbotron>
                <h3 className="display-4">Hi, I'm Ben Greenow.</h3>
                <p>I'm a front end developer who likes to design things.</p>
            </Jumbotron>
        </Container>
    );
}
