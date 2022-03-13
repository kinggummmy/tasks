import React, { useState } from "react";
import { Button } from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [Type, setType] = useState<QuestionType>("short_answer_question");

    function changeType(): void {
        setType(
            Type === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <>
            <div>
                <Button onClick={changeType}> Change Type</Button>
            </div>
            <div>
                {Type === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </>
    );
}
