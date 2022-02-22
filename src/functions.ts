/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const celsius: number = (temperature - 32) * (5 / 9);
    return celsius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let final: number;
    final = 0; //wouldn't stop giving me a warning when i used one line (let final: number = 0), decided to do this so it's prettier.
    if (first > 0) {
        final = final + first;
    }
    if (second > 0) {
        final = final + second;
    }
    if (third > 0) {
        final = final + third;
    }
    return final;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let upper = message.toUpperCase();
    upper += "!";
    return upper;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let finale = 0;
    finale = message.length;
    return message.charAt(finale - 1) === "?";
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word === "yes" || word === "YES") {
        return true;
    }
    if (word === "no" || word === "NO") {
        return false;
    }
    return null;
}