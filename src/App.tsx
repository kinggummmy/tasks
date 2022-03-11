import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                style={{
                    backgroundColor: "darkseagreen"
                }}
                className="App-header"
            >
                <h1>This is a header.</h1>
                <img
                    src="https://i.imgur.com/mUMMMSv.png"
                    alt="An image I used for an emote on Discord"
                />
                UD CISC275 with React Hooks and TypeScript<br></br>
                Nick Costley<br></br>
                Hello World<br></br>
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
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
