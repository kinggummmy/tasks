import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                style={{
                    backgroundColor: "darkseagreen"
                }}
                className="App-header"
            >
                <h1>This is a Header.</h1>
                <img
                    src="https://i.imgur.com/mUMMMSv.png"
                    alt="An image I used for an emote on Discord"
                />
                UD CISC275 with React Hooks and TypeScript<br></br>
                Nick Costley<br></br>
                Hello World<br></br>
                Test line <br></br>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                Three things I enjoy<br></br>
                <ul>
                    <li
                        style={{
                            border: "1px solid blue",
                            padding: "4px",
                            backgroundColor: "deepskyblue"
                        }}
                    >
                        Mushrooms
                    </li>
                    <li style={{ border: "1px solid green", padding: "4px" }}>
                        <b>Frogs</b>
                    </li>
                    <li style={{ border: "1px solid red", padding: "4px" }}>
                        Root Beer
                    </li>
                </ul>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "300px",
                                    height: "200px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "300px",
                                    height: "200px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
