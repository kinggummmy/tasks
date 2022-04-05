import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((colors: string) => (
                <Form.Check
                    key={colors}
                    inline
                    type="radio"
                    name="colors"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setColor(event.target.value)
                    }
                    id={"colors-choice-" + colors}
                    label={
                        <span style={{ backgroundColor: colors }}>
                            {colors}
                        </span>
                    }
                    value={colors}
                    checked={color === colors}
                />
            ))}
            our chosen color:{" "}
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </span>
        </div>
    );
}
