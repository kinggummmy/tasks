import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    type changeEvent = React.ChangeEvent<HTMLInputElement>;
    function updatestudent(event: changeEvent) {
        setIsStudent(event.target.checked);
    }
    function updatename(event: changeEvent) {
        setName(event.target.value);
    }
    return (
        <div>
            <div>
                <div>
                    <h3>Edit Mode</h3>
                    <Form.Check
                        type="switch"
                        id="is-switch-on"
                        label="Edit Mode?"
                        checked={edit}
                        onChange={() => setEdit(!edit)}
                    />
                </div>
                <div>
                    {edit && (
                        <Form.Check
                            type="switch"
                            id="is-student"
                            label="Student?"
                            checked={isStudent}
                            onChange={updatestudent}
                        />
                    )}
                </div>
                <div>
                    {edit && (
                        <Form.Group controlId="changeTextBox">
                            <Form.Label>Change Name:</Form.Label>
                            <Form.Control
                                type="string"
                                value={name}
                                onChange={updatename}
                            />
                        </Form.Group>
                    )}
                </div>
                <div>
                    {name} {isStudent ? "is" : "is not"}
                    {" a student"}
                </div>
            </div>
        </div>
    );
}
