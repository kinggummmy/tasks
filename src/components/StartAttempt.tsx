import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [counter, setCounter] = useState<number>(4);
    const [quizStarted, setQuiz] = useState<boolean>(false);
    function subtractOne(): void {
        setCounter(counter - 1);
    }
    function addOne(): void {
        setCounter(counter - 1);
    }
    function startQuiz(): void {
        counter > 0 ? subtractOne : counter;
        !quizStarted;
    }
    return (
        <>
            <div>
                <Button onClick={() => startQuiz()} disabled={quizStarted}>
                    Start Quiz
                </Button>
                <Button onClick={() => setQuiz(false)} disabled={!quizStarted}>
                    Stop Quiz
                </Button>
                <Button onClick={() => addOne()}> Mulligan </Button>
                Attempts: {counter};
            </div>
        </>
    );
}
