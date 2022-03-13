/* eslint-disable no-extra-parens */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
export type Holiday = "❤️" | "🎄" | "🥚" | "🎃" | "💀";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("❤️");

    function alphabetical(holiday: Holiday): Holiday {
        holiday === "🎄"
            ? (holiday = "💀")
            : holiday === "💀"
            ? (holiday = "🥚")
            : holiday === "🥚"
            ? (holiday = "🎃")
            : holiday === "🎃"
            ? (holiday = "❤️")
            : (holiday = "🎄");
        return holiday;
    }
    function order(holiday: Holiday): Holiday {
        holiday === "❤️"
            ? (holiday = "🥚")
            : holiday === "🥚"
            ? (holiday = "🎃")
            : holiday === "🎃"
            ? (holiday = "💀")
            : holiday === "💀"
            ? (holiday = "🎄")
            : (holiday = "❤️");
        return holiday;
    }

    return (
        <div>
            Cycle Holiday
            <Button onClick={() => setHoliday(alphabetical(holiday))}>
                Alphabet
            </Button>
            <Button onClick={() => setHoliday(order(holiday))}>Year</Button>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
