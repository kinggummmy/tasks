import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [reqs, setReqs] = useState<string>("0");
    const [attempts, setAttempts] = useState<number>(3);
    function desideButton(): boolean {
        if (attempts <= 0) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <span># of attempts:{attempts}</span>
            <div>
                <Form.Group controlId="setAttemptByRequest">
                    <Form.Label>Gain more attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={reqs}
                        onChange={(event: ChangeEvent) =>
                            setReqs(
                                event.target.value.length !== 0
                                    ? event.target.value
                                    : "0"
                            )
                        }
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={desideButton()}
                >
                    use
                </Button>
                <Button onClick={() => setAttempts(attempts + parseInt(reqs))}>
                    gain
                </Button>
            </div>
        </div>
    );
}
