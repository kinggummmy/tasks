import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [counter, setCounter] = useState<number>(4);
    const [quizStarted, setQuiz] = useState<boolean>(false);
    function addOne(): void {
        setCounter(counter + 1);
    }
    function startQuiz(): void {
        if (counter != 0) {
            setCounter(counter - 1);
            setQuiz(true);
        } else {
            !quizStarted;
        }
    }
    return (
        <>
            <div>
                <Button
                    onClick={() => startQuiz()}
                    disabled={quizStarted || counter === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => setQuiz(false)} disabled={!quizStarted}>
                    Stop Quiz
                </Button>
                <Button onClick={() => addOne()} disabled={quizStarted}>
                    {" "}
                    Mulligan{" "}
                </Button>
                Attempts: {counter};
            </div>
        </>
    );
}
