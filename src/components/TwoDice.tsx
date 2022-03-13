/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [di1, setdi1] = useState<number>(0);
    const [di2, setdi2] = useState<number>(6);

    function equality(): string {
        return di1 === di2 ? (di1 === 1 ? "Lose" : "Win") : "Roll Again";
    }

    return (
        <div>
            <span> Two Dice</span>
            <Button onClick={() => setdi1(d6())}>Roll Left</Button>
            <span data-testid="left-die">{di1}</span>
            <Button onClick={() => setdi2(d6())}>Roll Right</Button>
            <span data-testid="right-die">{di2}</span>
            <span>{equality()}</span>
        </div>
    );
}
